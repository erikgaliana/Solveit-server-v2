const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema ({

    text:String,
    pic:String,
    category:String,
    author:{ type: Schema.Types.ObjectId, ref: 'User'},
    problemtosolve : {type: Schema.Types.ObjectId, ref: 'Problem'},

    

    
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports= Answer;