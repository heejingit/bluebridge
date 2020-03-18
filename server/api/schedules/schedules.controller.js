'use strict';
require('../../models/schedule');

const mongoose = require('mongoose');
const Schedules = mongoose.model('schedule');


function listAllSchedules(req, res) {
  //retrive all feeds from the db
  Schedules.find({}, (err, schedules) => {
    if (err) return res.status(400).send('Error');

    res.send(schedules);
  });
}
function createSchedule(req, res) {
  const schedule = new Schedules(req.body);

  schedule.save((err, result) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    res.status(200).send(result);
  });
}

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllSchedules, createSchedule };
