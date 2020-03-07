const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');

const connection = require('./db/connect');
const {jwtSecret} = require('./common/config');

const authRouter = require('./routes/auth');
const patientRouter = require('./routes/patient');

connection.connect();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Add CORS Headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use('/auth', authRouter);

app.use((req, res, next) => {
  // we dont need to do anything for preflight request
  if (req.method !== "OPTIONS") { 
    const token = req.headers['x-access-token'];
    if (token) {
      //verify token
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401);
          res.send({message: 'Failed to verify token'});
          return;
        }
        // if we're here that means the token is valid
        req.decodedToken = decodedToken;
        next();
      });
    } else {
      //if we're here that means the client has not provided a token
      res.status(403);
      res.send({message: 'Access Forbidden'});
      return;
    }
  }
})

app.use('/patient', patientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err)
  res.status(err.status || 500);
  res.send({message: 'Resource not found!'});
});

module.exports = app;
