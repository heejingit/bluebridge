"use strict";
// const User = require('./user.model');

const feeds = [
  {
    author: "woojin@nscc.ca",
    description:
      "Due to the prior appointment set up, we had to change the schedule originally set up on Friday. It will happened next Monday. Thanks for your understanding.",
    date: "February 6, 2020",
    isHighPriority: true
  },
  {
    author: "woojin@nscc.ca",
    description:
      "Management announced that they gave us a new garbage can! Don't throw your garbage on the floor anymore please!",
    date: "January 26, 2020",
    isHighPriority: false
  },
  {
    author: "injun@nscc.ca",
    description: "I have so many trash",
    date: "January 20, 2020",
    isHighPriority: false
  }
];

function listAllFeeds(req, res) {
  return res.json(feeds);
}

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllFeeds };
