'use strict';

require('../../models/user');

const mongoose = require('mongoose');
const Users = mongoose.model('User');

const jwt = require('jsonwebtoken');

const users = [
  {
    _id: '5e6515c2fc13ae3c1600049a',
    email: 'woojin@nscc.ca',
    password: 'password',
    firstName: 'Woojin',
    lastName: 'Oh'
  },
  {
    _id: '5e6515c2fc13ae3c16000549',
    email: 'injun@nscc.ca',
    password: 'password',
    firstName: 'Injun',
    lastName: 'Hwang'
  },
  {
    _id: '5e6515c2fc13ae3c160004b9',
    email: 'heejin@nscc.ca',
    password: 'password',
    firstName: 'Heejin',
    lastName: 'Jeon'
  }
];

function listAllUsers(req, res) {
  // Users.find({}, (err, users) => {
  //   if (err) return res.status(400).send('Error');

  //   res.send(users);
  //   // feeds.push(feedData);
  // });
  return res.json(users);
}

function findUserByEmail(req, res, next) {
  const email = req.params.email;
  const result = users.filter(user => user.email === email);
  return res.json(result);
}

function create(req, res) {
  const user = req.body;
  users.push(user);
  return res.json(users);
}

function login(req, res) {
  let login = {
    email: req.body.email,
    password: req.body.password
  };

  let user = users.find(user => user.email == login.email);
  if (!user) {
    return res.json({ success: false, message: 'email or password incorrect' });
  }

  if (user.password == login.password) {
    sendToken(user, res);
  }
}

function sendToken(user, res) {
  var token = jwt.sign({ userId: user.id }, '123');
  res.json({
    email: user.email,
    token: token,
    expiresIn: 3600
  });
}

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllUsers, findUserByEmail, create, login };
