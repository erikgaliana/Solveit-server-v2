const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  username: String,
  password: String,
  email: String,
  pictureUrl: String,
  expert: String,
  points: Number,
  myproblems: [{type: Schema.Types.ObjectId, ref: 'Problem'}],
  myanswers: [],
  mysolvedproblems: [], 

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;