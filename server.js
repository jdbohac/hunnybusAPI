const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Events = require('./models/events.js')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.listen(3000, () => {
    console.log('listening...');
});
app.get('/events', (req, res) => {
    Events.find({}).then((foundEvents) =>{
        res.json(foundEvents)
    })
})
app.post('/events', (req, res) => {
    Events.create(req.body).then((createdEvent) =>{
        res.json(createdEvent)
    })
})
app.delete('/events/:id',  (req, res) => {
    Events.findByIdAndRemove(req.params.id)
    .then((deletedEvent) => {
    res.json(deletedEvent)
    }).catch((err) => {
        console.log(err)
    })
})
app.put('/events/:id', (req, res) => {
    Events.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedEvent) => {
        res.json(updatedEvent)
    })
})
mongoose.connect('mongodb://localhost:27017/events')
mongoose.connection.once('open', () => {
    console.log('connected to mongod... @ //localhost:27017/events');
});