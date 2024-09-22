const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    departureCity: {
        type: String,
        required: true
    },
    arrivalCity: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Flight', flightSchema);