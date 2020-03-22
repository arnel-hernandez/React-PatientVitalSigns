const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()
const config = require('config')
const db = config.get("mongoURI");
const Patients = require('../models/patients')

//@route GET /patients , Show Patients
router.get('/', function(req, res, next) {
    Patients.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

//@route GET ONE /patients , Show One Patients
router.get('/:id', function(req, res, next) {
    Patients.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//@route POST /patients , Add Patients
router.post('/', function(req, res, next) {
    Patients.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

//@route UPDATE /patients , Update Patients
router.put('/:id', function(req, res, next) {
    Patients.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//@route Delete /patients , Delete Patients
router.delete('/:id', function(req, res, next) {
    Patients.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

module.exports = router;