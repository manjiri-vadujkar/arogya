const express = require('express');

const patient = require('../models/patient')

const router = express.Router();

router.get('/details', function(req, res, next) {
  patient.getDetails(req.decodedToken.user, (err, result) => {
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
    res.send({message: 'Details found', data: result[0]});
  })
});

router.post('/test', (req, res, next) => {
  patient.addTestResult(req.body, req.decodedToken.user, (err) => {
    if (err) {
        res.status(500);
        res.send({message: 'Error'});
        return; 
    }
    res.status(200);
    res.send({message: 'Test Result Successfully Submitted'});
    return;
});
});

module.exports = router;
