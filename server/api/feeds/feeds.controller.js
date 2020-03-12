"use strict";
require('../../models/feed');

const mongoose = require('mongoose'),
      Feed = mongoose.model('feed');

const feeds = [];

Feed.find({}, function (err, feedData) {
  if(err) return res.status(500).json(err);
  feeds.push(feedData);
})


// const feeds = [
//   // {
//   //   author: "Woojin Oh",
//   //   description:
//   //     "Due to the prior appointment set up, we had to change the schedule originally set up on Friday. It will happened next Monday. Thanks for your understanding.",
//   //   date: new Date(2020, 1, 26),
//   //   isHighPriority: true
//   // },
//   // {
//   //   author: "Woojin Oh",
//   //   description:
//   //     "Management announced that they gave us a new garbage can! Don't throw your garbage on the floor anymore please!",
//   //   date: new Date(2020, 1, 17),
//   //   isHighPriority: false
//   // },
//   // {
//   //   author: "Injun Hwang",
//   //   description: "I have so many trash",
//   //   date: new Date(2020, 1, 10),
//   //   isHighPriority: false
//   // },
//   // {
//   //   author: "Heejin Jeon",
//   //   description: "I need some candy",
//   //   date: new Date(2020, 1, 15),
//   //   isHighPriority: false
//   // },
//   // {
//   //   author: "John Doe",
//   //   description: "Good morning",
//   //   date: new Date(2020, 2, 1),
//   //   isHighPriority: true
//   // }
// ];

function listAllFeeds(req, res) {
  return res.json(feeds);
}

function create(req, res) {
  const feed = req.body;
  feeds.push(feed);
  return res.json(feeds);
}

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllFeeds, create };
