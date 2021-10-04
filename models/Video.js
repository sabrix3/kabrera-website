const mongoose = require('mongoose')

const {Schema, model} = mongoose

const videoSchema = new Schema({ 
    name: {type:String, required:true},
    url: {type:String, required:true},
});

module.exports= Video = model("video",videoSchema)