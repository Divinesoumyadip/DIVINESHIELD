const express = require('express');
const Report = require('../models/Report');

const router = express.Router();

router.post('/', async (req, res) => {
  const { description } = req.body;
  const report = new Report({ description });
  try {
    await report.save();
    res.status(201).send(report);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
