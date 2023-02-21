const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const app = express()

dotenv.config()
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) throw err;
})


app.get('/test', (req, res) => {
    res.json('rest ok')
})

app.post('/register', (req, res) =>{

})
app.listen(4000)