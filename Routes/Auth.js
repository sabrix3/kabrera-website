const Router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const {validator, registerRules, loginRules} = require('../middleware/validator')
const jwt = require('jsonwebtoken')
const isAuth = require('../middleware/isAuth')
require("dotenv").config({path:'../config/.env'})

Router.post("/register",registerRules(),validator,async(req,res)=>{
    const {firstName,lastName,email,password,role}= req.body
    try {
        //simple validation with validator
        
        //check for existing email
        let user = await User.findOne({email})
        if(user){
            return res.status(400).send({msg:"User already exist"})
        }
        //create new user
        user = new User({firstName, lastName, email, password, role})
        //hash password
        const salt = 10
        const hashPassword = await bcrypt.hash(password, salt)
        user.password = hashPassword
        //save user
        await user.save()
        //register payload
        const payload ={
            id: user._id
        }
        const token = await jwt.sign(payload,'mySecret',{expiresIn:60*60}) 

        res.status(200).send({msg:'User register with success',user,token})

    } catch (error) {
        res.status(500).send({msg:'Register server errors'})
    }
})

//login
Router.post('/login',loginRules(),validator,async(req,res)=>{
    const {email, password} = req.body
    try {
        //simple validation with validator
        
        //check for existing email
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).send({msg:"User Does not exist"})
        }
        
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send({msg:'Bad Credentials Password'})
        }

        //check for role
        


        //login payload
        const payload ={
            id: user._id
        }
        const token = await jwt.sign(payload,process.env.secretOrKey,{expiresIn:60*60}) 
        
        res.send({msg:'Logged with success', user,token})

    } catch (error) {
        res.status(500).send({msg:'login server error'})
    }
})

//private routes
Router.get('/user',isAuth, (req,res)=>{
    res.status(200).send({user:req.user})
})

module.exports = Router