const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    Meeting: [
        {
          purpose: String,
          participants: Array,
          location: String,
          date: Date
        },
      ],
      Vacation: [
        {
          user: ObjectId,
          description: String,
          startDate: Date,
          endDate: Date,
          isApproved: Boolean
        }
      ],
      Event: [
        {
          title: String,
          description: String,
          date: Date
        }
      ]
    
});
  
module.exports = mongoose.model('Schedule', scheduleSchema);