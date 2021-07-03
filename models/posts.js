const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    details: {
        type: [String],
        required: true
    },
    place_type: {
        type: String
    },
    images: {
        type: [String],
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('places', placeSchema)