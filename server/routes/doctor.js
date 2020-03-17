const express = require('express');
const jwt = require('jsonwebtoken');

const doctor = require('../models/doctor');
const {jwtSecret} = require('../common/config');

const router = express.Router();

router.post('/login', (req, res, next) => {
    const {username, password} = req.body;
    doctor.getDL(username, password, (err, result) => {
        if (err) {
            res.status(500);
            res.send({message: 'Error'});
            return; 
        }
        if (!result.length) {
            console.log(result);
            res.status(401);
            res.send({message: 'Username or Password is incorrect'});
            return;
        }
        const token = jwt.sign({user: username}, jwtSecret, {
            expiresIn: 60*60 //expires in an hour
        });
        res.status(200);
        res.send({message: 'Login success', data: token});
        return;
    });
});

module.exports = router;