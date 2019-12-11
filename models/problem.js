const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema ({

    text:String,

    pic:String,

    category:String,


});

const Problem = mongoose.model('Problem', problemSchema);

module.exports= Problem;