const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: ObjectId,
    personalInfo: {
      email: String,
      password: String,
      firstName: String,
      lastName: String,
      picture: String
    },
    employeeInfo: {
      department: String,
      position: String,
      hourlyWage: Number,
      roles: Array,
      workInfo: {
        lastLoginTime: Date, 
        lastLogoutTime: Date,
        workTime: [
          {
            date: Date,
            workStartTime: Date,
            workFinishTime: Date
          }
        ]
      }
    },
    isLogin: Boolean,
    condition: String,
    note: {                 // Personal note
      description: String,
      date: Date,
      isHighPriority: Boolean
    }
});
  
module.exports = mongoose.model('User', userSchema);