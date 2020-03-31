const express = require('express');
const jwt = require('jsonwebtoken');

const patient = require('../models/patient');
const doctor = require('../models/doctor');
const {jwtSecret} = require('../common/config');

const router = express.Router();

router.post('/login', (req, res, next) => {
    const {email, password} = req.body;
    patient.get(email, password, (err, result) => {
        if (err) {
            res.status(500);
            res.send({message: 'Error'});
            return; 
        }
        if (!result.length) {
            res.status(401);
            res.send({message: 'Email or Password is incorrect'});
            return;
        }
        const token = jwt.sign({user: email}, jwtSecret, {
            expiresIn: 60*60 //expires in an hour
        });
        res.status(200);
        res.send({message: 'Login success', data: token});
        return;
    });
});

router.post('/dlogin', (req, res, next) => {
    const {email, password} = req.body;
    doctor.getDL(email, password, (err, result) => {
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
        const token = jwt.sign({user: email, doctor: true}, jwtSecret, {
            expiresIn: 60*60 //expires in an hour
        });
        res.status(200);
        res.send({message: 'Login success', data: token, doctor: true});
        return;
    });
});

router.post('/signup', (req, res, next) => {
    const {name, email, password, age, gender, height, weight, hdiseases} = req.body;
    patient.addPatient(name, email, password, age, gender, height, weight, hdiseases, (err) => {
        if (err) {
            res.status(500);
            res.send({message: 'Error'});
            return; 
        }
        res.status(200);
        res.send({message: 'Successfully Signed up'});
        return;
    });
  });

  

module.exports = router;
