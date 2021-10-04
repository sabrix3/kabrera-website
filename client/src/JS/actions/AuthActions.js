import axios from "axios"
import {LOGIN_USER,LOGOUT_USER,REGISTER_USER,USER_LOADING,GET_AUTH_USER,AUTH_ERRORS} from "../constant/Action-types"


//loading user
export const userLoading = ()=>(dispatch)=>{
    dispatch({
        type:USER_LOADING
    })
}


//register user action
export const registerUser = (FormData) => async(dispatch)=>{
    dispatch(userLoading())
    try {
        const res = await axios.post('/api/user/register',FormData)
        dispatch({
            type:REGISTER_USER,
            payload: res.data //{msg,user,token}
        })
    } catch (error) {
        console.dir(error)
        const {errors, msg}= error.response.data
        if(Array.isArray(errors))
        {
            errors.forEach((err)=>alert(err.msg))
        }
        if(msg){
            return alert(msg)
        }
        dispatch({type:AUTH_ERRORS})
    }
}

//login user action
export const loginUser = (FormData) => async(dispatch)=>{
    dispatch(userLoading())
    try {
        const res = await axios.post('/api/user/login',FormData)
        dispatch({
            type:LOGIN_USER,
            payload: res.data //{msg,user,token}
        })
    } catch (error) {
        console.dir(error)
        const {errors, msg}= error.response.data
        if(Array.isArray(errors))
        {
            errors.forEach((err)=>alert(err.msg))
        }
        if(msg){
            return alert(msg)
        }
        dispatch({type:AUTH_ERRORS})
    }
}

//get auth user
export const getAuthUser = ()=>async(dispatch)=>{
    dispatch(userLoading())
    try {
        //headers
        const config ={
            headers:{
                'x-auth-token':localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/user/user',config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data //user:req.user
        })
    } catch (error) {
        console.log(error)
        dispatch({type:AUTH_ERRORS})
    }
}

//Logout
export const logoutUser = ()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
}