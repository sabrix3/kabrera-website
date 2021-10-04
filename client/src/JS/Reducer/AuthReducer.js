import {LOGIN_USER,LOGOUT_USER,REGISTER_USER,USER_LOADING,GET_AUTH_USER,AUTH_ERRORS} from "../constant/Action-types"

const initialState = {
    user: null,
    isLoading: false,
    token:localStorage.getItem('token'),
    isAuth:false,
    isAdmin:false,
}

const authReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case REGISTER_USER:
        case LOGIN_USER:
        localStorage.setItem('token',payload.token)  
        return{
            ...state,
            isLoading:false,
            isAuth:true,
            isAdmin:true,
            ...payload
                
          } 
        
        case GET_AUTH_USER:
        return{
            ...state,
            isLoading:false,
            isAuth:true,
            isAdmin:true,
            ...payload

        }

        case USER_LOADING:
            return{
            ...state,
            isLoading:true,
            
        }

        case LOGOUT_USER:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                user:null,
                isAuth:false,
                isLoading:false
            }
            

            
    
        default:
            return state
    }
}

export default authReducer