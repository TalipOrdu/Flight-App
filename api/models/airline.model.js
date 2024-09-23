const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String, // e.g., 'AA' for American Airlines
        required: true,
        unique: true
    },
    logo: {
        type: String // URL to the airline's logo
    },
});

module.exports = mongoose.model('Airline', airlineSchema);