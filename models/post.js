const { Schema, Mongoose } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String
    }
})

module.exports = Mongoose.module('Post', schema)