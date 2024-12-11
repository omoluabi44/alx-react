import uiReducer from "./uiReducer";
import notificationReducer from './notificationReducer'
import courseReducer from "./courseReducer";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    courses:courseReducer,
    notification: notificationReducer,
    ui:uiReducer
})

export default rootReducers;