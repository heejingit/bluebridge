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

// function create(req, res) {
//   const feed = req.body;
//   feeds.push(feed);
//   return res.json(feeds);
// }

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllSchedules };
