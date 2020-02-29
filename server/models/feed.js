const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    _id: ObjectId,
    author: ObjectId,
    description: String,
    date: Date,
    isHighPriority: Boolean
});
  
module.exports = mongoose.model('Feed', feedSchema);