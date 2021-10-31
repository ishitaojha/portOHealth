const express = require('express');
const router = express.Router();
const contactSchema = require('../models/contact');

router.post('/',(req,res)=>{
    const data = new contactSchema({
        Name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    try {
        await data.save();
        res.send('Saved Data!');
    } catch (error) {
        console.log(error);
    }
})