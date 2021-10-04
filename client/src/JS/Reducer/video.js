import { EDIT_VIDEO, GET_VIDEO, GET_VIDEO_FAIL,GET_VIDEO_LOAD,GET_VIDEO_SUCCESS } from "../constant/video"

const initialState ={
    videos : [],
    loadVideos: false,
    errors:{},
    video: {},
    editVideo:"",
}

export const videoReducer = (state=initialState, {type,payload}) =>{
    switch (type) {
        case GET_VIDEO_LOAD:
            return {...state,loadVideos:true}
        case GET_VIDEO_SUCCESS:
            return {...state,videos:payload,loadVideos:false}
        case GET_VIDEO_FAIL :
            return {...state,loadVideos:false, errors:payload}
        case GET_VIDEO :
            return{...state,user:payload}
        case EDIT_VIDEO :
            return {...state,editVideo:payload}
            
    
        default:
         return   state
    }
}