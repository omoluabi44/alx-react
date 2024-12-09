import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, List, fromJS } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const initialState = fromJS({
  notifications: [],
  filter: "DEFAULT",
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {

      const normalizedData = notificationsNormalizer(action.data);
      const notificationsList = List(
        Object.values(normalizedData.entities.notification).map((notification) =>
          Map({
            ...notification,
            isRead: false,
          })
        )
      );

      return state.set("notifications", notificationsList);
    }

    case MARK_AS_READ: {
      return state.updateIn(
        ["notifications", state.get("notifications").findIndex((notification) => notification.get("id") === action.index)],
        (notification) => notification.set("isRead", true)
      );
    }

    case SET_TYPE_FILTER: {
      return state.set("filter", action.filter);
    }

    default:
      return state;
  }
}
