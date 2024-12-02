import uiReducer from "./uiReducer"
import { initState } from "./uiReducer"
import {SELECT_COURSE} from "../actions/courseActionTypes"
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe('uiREducer testing', () => {
    it('should return initial state', () => {
        const state = uiReducer(undefined,{});
        expect(state).toEqual(initState);
    });

    it('should return initial state when SEELECT_COURSE is passed', () => {
       const  action = {type:SELECT_COURSE}
        const state = uiReducer(undefined, action);
        expect(state).toEqual(initState);
    });
    it('should return updated state when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const  action = {type:DISPLAY_NOTIFICATION_DRAWER}
        const expectedState = {
            ...initState,
            isNotificationDrawerVisible: true

        }
         const state = uiReducer(undefined, action);
         expect(state).toEqual(expectedState);
     });
    
    
});
