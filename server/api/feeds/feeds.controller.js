"use strict";
// const User = require('./user.model');

const feeds = [
  {
    author: "Woojin Oh",
    description:
      "Due to the prior appointment set up, we had to change the schedule originally set up on Friday. It will happened next Monday. Thanks for your understanding.",
    date: "February 6, 2020",
    isHighPriority: true
  },
  {
    author: "Woojin Oh",
    description:
      "Management announced that they gave us a new garbage can! Don't throw your garbage on the floor anymore please!",
    date: "January 26, 2020",
    isHighPriority: false
  },
  {
    author: "Injun Hwang",
    description: "I have so many trash",
    date: "January 20, 2020",
    isHighPriority: false
  }
];

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
