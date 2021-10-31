const express = require('express');
const router = express.Router();
const contactSchema = require('../models/contact');
const sendMail = require('../SendMail/SendMail');
router.post('/',async (req,res)=>{
    const data = new contactSchema({
        Name:req.body.Name,
        Email:req.body.Email,
        Message:req.body.Message
    })
    sendMail(req.body.Email);
    console.log(req.body.Name);
    try {
        await data.save();
        res.send('Saved Data!');
    } catch (error) {
        console.log(error);
    }
})
module.exports= router;