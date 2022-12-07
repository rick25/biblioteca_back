const { Schema, model } = require('mongoose')

const OrganismoShema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    bgColor: {
        type: String,
        required: true
    },
})

module.exports = model('Organismo', OrganismoShema)
