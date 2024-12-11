import {LOGIN,LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT,DISPLAY_NOTIFICATION_DRAWER,HIDE_NOTIFICATION_DRAWER} from '../actions/uiActionTypes'
import {Map} from "immutable"

export const initState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map()
})
export default function uiReducer(state=initState, actions){
    switch( actions.type){
        case "DISPLAY_NOTIFICATION_DRAWER":
            return state.set("isNotificationDrawerVisible",true);
        case "HIDE_NOTIFICATION_DRAWER ":
            return state.set("isNotificationDrawerVisible",false);
        case "LOGIN_SUCCESS ":
            return state.set("isUserLoggedIn",true);
        case "LOGIN_FAILURE":
            return state.set("isUserLoggedIn",false);
        case "LOGOUT":
            return state.set("isUserLoggedIn",false).set("user", Map());
        case "LOGIN":
            return state.set("isUserLoggedIn",true).set('user', actions.user);
        default:
            return state;
    }
}