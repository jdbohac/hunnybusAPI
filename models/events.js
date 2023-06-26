const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const eventSchema = new Schema({
    name: String,
    date: Date,
    address: String,
    supplies: String,
})

const Events = mongoose.model('Events', eventSchema)

module.exports = Events