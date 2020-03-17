"use strict";
const express = require("express");
// Import the Controller so we may assign specific functions to a route
const controller = require("./schedules.controller");

// Assign the route variable to an Express.Route handler
const router = express.Router();

/**
 * path: /api/schedules
 * method: GET
 * function: listAllFeeds() in the feeds.controller.js file
 */
router.get("/", controller.listAllSchedules);

/**
 * path: /api/feeds
 * method: POST
 * function: create() in the feeds.controller.js file
 */
// router.post("/", controller.create);

// We export the routes to the express app, in the routes.js file we will assign the base URL for this endpoint.
// in this file we simply want to specify the path after the base /api/users url.
module.exports = router;
