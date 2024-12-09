import {createSelector} from "reselect"
import notificationReducer from "../reducers/notificationReducer"

export const filterTypeSelected =(state)=> state.get('filter')

export const getNotifications = (state) => state.get('notifications')

export const getUnreadNotifications  = createSelector(
    [getNotifications],
    (notificatoions) => notificatoions.filter((noti) => !noti.get('isRead'))
)