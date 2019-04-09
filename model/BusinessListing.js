const mongoose = require('mongoose');

const BusinessListingSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: ""
    },
    company_name: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    prefix_phone: {
        type: String,
        default: ""
    },
    prefix_phone: {
        type: String,
        default: ""
    },
    email_id: {
        type: String,
        default: ""
    },
    verify: {
        type: String,
        default: ""
    },
    valid: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    provider: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    timezone: {
        type: String,
        default: ""
    },
    timedifference: {
        type: String,
        default: ""
    },
    timezone_abber: {
        type: String,
        default: ""
    },
    called: {
        type: String,
        default: ""
    },
    subscribed: {
        type: String,
        default: ""
    },
    subscribed: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model('BusinessListing', BusinessListingSchema);