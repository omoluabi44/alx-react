import { NotificationTypeFilters,FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading, 
});

export const setNotifications = (notifications)=>({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications, 
})

export const fetchNotification = () =>{
  return async (dispatch)=>{
    dispatch(setLoadingState(true));

    try {
      const response = await fetch('/notification.json');
      const data = await response.json();

      dispatch(setNotifications(data));
    }
    catch (error){
      console.log("error");
      
    }
    finally{
      dispatch(setLoadingState(false))
    }
  }
}