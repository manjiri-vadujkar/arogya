const express = require('express');

const doctor = require('../models/doctor');

const router = express.Router();

router.use((req, res, next) => {
  if(!req.decodedToken.doctor) {
    res.status(403);
    res.send({message: 'Access Forbidden'});
    return;
  }
  next();
});

router.get('/patients', function(req, res, next) {
    doctor.getPatients(req.decodedToken, (err, result) => {
      if (err) {
        res.status(500);
        res.send({message: 'Error'});
        return;
      }
      if (!result.length) {
        res.status(404);
        res.send({message: 'Details not found'});
        return;
      }
      res.status(200);
      res.send({message: 'Details found', data: result});
    })
  });

  router.get('/appointments', function(req, res, next) {
    doctor.getAppointments(req.decodedToken, (err, result) => {
      if (err) {
        res.status(500);
        res.send({message: 'Error'});
        return;
      }
      if (!result.length) {
        res.status(404);
        res.send({message: 'Details not found'});
        return;
      }
      res.status(200);
      res.send({message: 'Details found', data: result});
    })
  });

module.exports = router;