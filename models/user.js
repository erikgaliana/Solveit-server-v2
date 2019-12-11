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
  problemstosolve: [{type: Schema.Types.ObjectId, ref: 'Problem'}],
  mysolvedproblems: [{type: Schema.Types.ObjectId, ref: 'Problem'}], 

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;