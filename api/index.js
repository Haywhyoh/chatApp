const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcryptjs')

dotenv.config()
const app = express()


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://haywhyoh:Mydreams@chatapp.z5npd6r.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if (err) throw err;
})
const jwtSecret = process.env.JWT_SECRET
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.get('/profile', (req, res) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) throw err;
            res.json(userData);
        });
    } else {
        res.status(401).json('no token')
    }
});

app.post('/register', async (req, res) =>{
    const {username, password} = req.body;
    try {
        const createdUser = await User.create({
            username:username,
            password: password,
        });
        jwt.sign({userId:createdUser._id, username}, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, {sameSite:'none', secure:true}).status(201).json({
                id: createdUser._id,
            })
        })
    } catch(err) {
        if (err) throw err;
        res.status(500).json('error');
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const foundUser = await User.findOne({username});
    if (foundUser) {
        const passOk = bcrypt.compareSync(password, foundUser.password);
        if (passOk) {
            jwt.sign({userId:founderUser._id,username}, jwtSecret, {}, (err, token) => {
                res.cookies('token', token, {sameSite:'none', secure:true}).jsob({
                    id: founder._id,
                });
            });
        }
    }
});
app.listen(4000)