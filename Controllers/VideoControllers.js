const Video = require('../models/Video')

exports.postVideo = async (req,res)=>{
    try {
        //create a new video with the model Video
        const newVideo = new Video(req.body)
        //test 1 if user has a url
        if(!req.body.url){
            res.status(400).send({msg:"Url is required"})
            return
        }
        //test 2 if the url already exist
        const user = await Video.findOne({url:req.body.url})
        if(user){
            res.status(400).send({msg:"Url already exist"})
            return
        }
        // save the video
        const response = await newVideo.save()
        res.send({response:response,msg:"Video saved"})

    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Can not save Video"})
    }
}