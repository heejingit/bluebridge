const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');
const joigoose = require('joigoose')(mongoose);
Joi.objectId = require('joi-objectid')(Joi);

const joiRoleSchema = Joi.Object({
    _id: Joi.objectId(),
    name: Joi.string()
})

const mongooseRoleSchema = joigoose.convert(joiRoleSchema);

// const roleSchema = new Schema({
//     _id: ObjectId,
//     name: String
// });
  
module.exports = mongoose.model('Role', mongooseRoleSchema);