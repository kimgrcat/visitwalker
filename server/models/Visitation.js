const { Schema, model } = require('mongoose')

const VisitationSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    device: {
        type: String,
        required: false,
    }
})

const Visitation = model('visitation', VisitationSchema)

module.exports = Visitation