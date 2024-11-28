import { MARK_AS_READ, SET_TYPE_FILTER,NotificationTypeFilters } from "./notificationActionTypes";


export const markAsAread =(index)=>{
    return{
        type: MARK_AS_READ,
        index,
    }
}
export const setNotificationFilter = (filter)=>{
    if (Object.values(NotificationTypeFilters).includes(filter)){
        return{
            type:SET_TYPE_FILTER,
            filter
        
        }

    }
    throw new Error("invlaid")

}

