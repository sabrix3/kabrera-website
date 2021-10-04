import {combineReducers} from "redux";
import authReducer from "./AuthReducer";
import { videoReducer } from "./video";
import { editReducer } from "./edit";

const rootReducer = combineReducers({authReducer,videoReducer,editReducer})

export default rootReducer;