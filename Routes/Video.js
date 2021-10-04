const express = require("express")
const Router = express.Router()
const Video = require('../models/Video')
const Controllers = require('../Controllers/VideoControllers')


//Post Video
Router.post("/post",Controllers.postVideo)

//Get all videos
Router.get('/',async(req,res)=>{
    try {
        const result = await Video.find()
        res.status(200).send({response:result ,msg:"get Videos Success"})
    } catch (error) {
        res.status(500).send({msg:"can not get Videos"})
    }
})

//Get One By ID
Router.get('/:id',async(req,res)=>{
    try {
        const result = await Video.findOne({_id:req.params.id})
        res.status(200).send({response:result ,msg:"get Video by Id Success"})
    } catch (error) {
        res.status(500).send({msg:"can not get Video check Video ID"})
    }
})

//Delete By ID 
Router.delete("/:id",async(req,res)=>{
    try {
        const result = await Video.deleteOne({_id:req.params.id})
        result ?
        res.status(200).send({msg:"Video Deleted"})
        :res.status(400).send("There is no Video With this ID ")
    } catch (error) {
        res.status(500).send({msg:"Error can not delete Video"})
    }
})

// Update Video By ID

Router.put("/:id",async(req,res)=>{
    try {
        const result = await Video.updateOne({_id:req.params.id},{$set:{...req.body}})
        result ?
        res.status(200).send({msg:"Video Updated"})
        :res.status(400).send("There is no Video With thids ID ")
    } catch (error) {
        res.status(500).send({msg:"Error can not Update Video"})
    }
})


module.exports =  Router