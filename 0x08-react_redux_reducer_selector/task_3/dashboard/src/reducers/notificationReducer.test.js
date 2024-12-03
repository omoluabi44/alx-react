import notificationReducer, { initialState } from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from "../actions/notificationActionTypes";

describe('notificationReducer tests', () => {
    it('should return the initial state when no action is passed', () => {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS action correctly', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" },
            ],
        };

        const expectedState = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        };

        const state = notificationReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER action correctly', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: "URGENT",
        };

        const expectedState = {
            ...initialState,
            filter: "URGENT",
        };

        const state = notificationReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ action correctly', () => {
        const initialStateWithNotifications = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        };

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedState = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: true, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        };

        const state = notificationReducer(initialStateWithNotifications, action);
        expect(state).toEqual(expectedState);
    });
});
