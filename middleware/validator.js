const {body, validationResult} =require ('express-validator');

//register rules
const registerRules = ()=> [
    body('firstName','first Name is required').notEmpty(),
    body('lastName','Last name is required').notEmpty(),
    body('email','Email should be email').isEmail(),
    body('password','Password minimum length must be 5 caracters').isLength
    ({
        min:5,
        max:20
    })



]

//login rules
const loginRules = ()=>[
    body('email','Email should be email').isEmail(),
    body('password','Password minimum length must be 5 caracters').isLength({
        min:5,
        max:20
    
    }),
]
const validator = (req,res,next)=>{
    const errors= validationResult(req)
    if(!errors .isEmpty()){
        res.status(400).send({errors:errors.array})
    }
    next()
}

module.exports = {validator, registerRules, loginRules}
