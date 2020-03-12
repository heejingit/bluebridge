const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');
const joigoose = require('joigoose')(mongoose);
Joi.objectId = require('joi-objectid')(Joi);

const joiScheduleSchema = Joi.object({
    Meeting: [
        {
          _id: Joi.objectId(),
          purpose: Joi.string(),
          participants: Joi.array().items(Joi.objectId()),
          location: Joi.string(),
          date: Joi.date()
        },
      ],
      Vacation: [
        {
          _id: Joi.objectId(),
          user: Joi.objectId(),
          description: Joi.string(),
          startDate: Joi.date(),
          endDate: Joi.date(),
          isApproved: Joi.boolean()
        }
      ],
      Event: [
        {
          _id: joigoose.objectId(),
          title: Joi.string(),
          description: Joi.string(),
          date: Joi.date()
        }
      ]
})

const mongooseScheduleSchema = joigoose.convert(joiScheduleSchema);

// const scheduleSchema = new Schema({
//     Meeting: [
//         {
//           purpose: String,
//           participants: Array,
//           location: String,
//           date: Date
//         },
//       ],
//       Vacation: [
//         {
//           user: ObjectId,
//           description: String,
//           startDate: Date,
//           endDate: Date,
//           isApproved: Boolean
//         }
//       ],
//       Event: [
//         {
//           title: String,
//           description: String,
//           date: Date
//         }
//       ]
    
// });
  
module.exports = mongoose.model('Schedule', mongooseScheduleSchema);