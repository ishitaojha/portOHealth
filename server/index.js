const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contact  = require('./routes/contact');
dotenv.config();
const cors = require('cors');
mongoose.connect(process.env.MONGO_URI,()=>{
    console.log('Connected to DB');
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Yay the server works for now');
})
app.use('/contact',contact);
app.listen(PORT,()=>{
    console.log(`Connected to PORT:${PORT} at `);
})
