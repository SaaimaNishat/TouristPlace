const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    postId:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    rating:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('comment', commentSchema)