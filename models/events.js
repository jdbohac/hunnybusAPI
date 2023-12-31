const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    address: String,
    supplies: String,
})

const Events = mongoose.model('Events', eventSchema)

module.exports = Events