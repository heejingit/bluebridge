const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');
const joigoose = require('joigoose')(mongoose);
Joi.objectId = require('joi-objectid')(Joi);

const joiFeedSchema = Joi.Object({
    _id: Joi.objectId().required(),
    author: Joi.objectId().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
    isHighPriority: Joi.boolean().required()
})

const mongooseFeedSchema = joigoose.convert(joiFeedSchema);

// const feedSchema = new Schema({
//     _id: ObjectId,
//     author: ObjectId,
//     description: String,
//     date: Date,
//     isHighPriority: Boolean
// });
  
module.exports = mongoose.model('Feed', mongooseFeedSchema);