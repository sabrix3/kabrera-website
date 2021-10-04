import { EDIT_VIDEO, GET_VIDEO, GET_VIDEO_FAIL,GET_VIDEO_LOAD,GET_VIDEO_SUCCESS } from "../constant/video"
import axios from "axios"

export const getVideos=()=>async(dispatch)=>{
    dispatch({type:GET_VIDEO_LOAD})
    try {
        let result = await axios.get(`/api/video`)
        dispatch({type:GET_VIDEO_SUCCESS,payload: result.data.response})
    } catch (error) {
        dispatch({type:GET_VIDEO_FAIL})
        console.log(error)
    }
}

export const deleteVideo = (id)=>(dispatch)=>{
    axios
    .delete(`/api/video/${id}`)
    .then((res=>dispatch(getVideos())))
    .catch((err)=>console.log(err))
}
export const getVideo = (id)=>(dispatch)=>{
    axios.get(`/api/video/${id}`)
    .then((res)=>dispatch({type:GET_VIDEO,payload:res.data.response}))
    .catch((err)=>console.log(err))
}

//edit VIDEO
export const editVideo = (id,user)=>(dispatch)=>{
    axios.put(`/api/video/${id}`,user)
    .then((res)=>{
        dispatch({type:EDIT_VIDEO,payload:res.data.msg})
    })
    .then(dispatch(getVideos()))
    .catch((err)=>console.log(err))
}
//post VIDEO
export const postVideo = (user)=>async(dispatch)=>{
    try {
        await axios.post(`/api/video/post`,user)
        dispatch(getVideos())
    } catch (error) {
        console.log(error.response)
    }
}
