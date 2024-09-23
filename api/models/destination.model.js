const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    iata: {
        type: String,
        required: true,
        unique: true // Assuming IATA codes are unique
    },
    publicName: {
        dutch: {
            type: String,
        },
        english: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Destination', destinationSchema);