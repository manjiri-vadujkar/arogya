const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post('/login', (req, res, next) => {
    const {email, password} = req.body;
    user.get(email, password, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.send({message: 'Error'});
            return; 
        }
        if (!result.length) {
            res.status(401);
            res.send({message: 'Email or Password is incorrect'});
            return;
        }
        console.log(result);
        res.status(200);
        res.send({message: 'Login success'});
        return;
    });
});

router.post('/signup', (req, res, next) => {
    res.send({message: 'Home page'});
});

router.post('/logout', (req, res, next) => {
    res.send({message: 'Home page'});
});

module.exports = router;
