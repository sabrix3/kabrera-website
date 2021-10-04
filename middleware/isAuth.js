const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config({path:'../config/.env'})

const isAuth = async(req,res,next)=>{
    try {
        const token = req.headers['x-auth-token']
        if(!token){
            return res.status(400).send({msg:'you are not authorized to enter'})
        }
        const decoded = await jwt.verify(token,process.env.secretOrKey)
        // if id exist or not and get it
        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(400).send({msg:'unauthorized'})
        }
        // get user
        req.user = user 
        next()
    } catch (error) {
        return res.status(400).send({msg:'token is not valid'})
    }
}

module.exports = isAuth