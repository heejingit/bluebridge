"use strict";
// const User = require('./user.model');
const jwt = require("jsonwebtoken");

const users = [
  {
    email: "woojin@nscc.ca",
    password: "password",
    firstName: "Woojin",
    lastName: "Oh"
  },
  {
    email: "injun@nscc.ca",
    password: "password",
    firstName: "Injun",
    lastName: "Hwang"
  },
  {
    email: "heejun@nscc.ca",
    password: "password",
    firstName: "Heejun",
    lastName: "Jeon"
  }
];

function listAllUsers(req, res) {
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
    return res.json({ success: false, message: "email or password incorrect" });
  }

  if (user.password == login.password) {
    sendToken(user, res);
  }
}

function sendToken(user, res) {
  var token = jwt.sign({ userId: user.id }, "123");
  res.json({
    email: user.email,
    token: token,
    expiresIn: 3600
  });
}

// Any functions we create, we want to return these functions to the express app to use.
module.exports = { listAllUsers, findUserByEmail, create, login };
