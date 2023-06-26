const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Events = require('./models/events.js')
app.use(express.json())
app.listen(3000, () => {
    console.log('listening...');
});

app.post('/events', (req, res) => {
    Events.create(req.body).then((createdEvent) =>{
        res.json(createdEvent)
    })
})

mongoose.connect('mongodb://localhost:27017/events')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});