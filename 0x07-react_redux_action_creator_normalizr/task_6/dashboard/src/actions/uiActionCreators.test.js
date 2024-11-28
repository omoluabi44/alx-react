import { logIn,logOut,hideNotificationDrawer,displayNotificationDrawer } from "./uiActionCreators";
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes";

describe('the login, logout, hide and display', () => {
    it('the login return correct output', () => {

        const email = 'test@example.com';
        const password = 'password123';
        const expectOutput = {
            type: LOGIN,
            user:{email, password}
        }
        const action = logIn(email,password)
        expect(action).toEqual(expectOutput)

    });
    it('test the displayNotificationDrawer  ', () => {
        const expectOutput = {
            type: DISPLAY_NOTIFICATION_DRAWER
        }
        const action = displayNotificationDrawer();
        expect(action).toEqual(expectOutput)
    });
    it('test the hideNotificationDrawer  ', () => {
        const expectOutput = {
            type: HIDE_NOTIFICATION_DRAWER
        }
        const action = hideNotificationDrawer();
        expect(action).toEqual(expectOutput)
    });
    it('test the Logut ', () => {
        const expectOutput = {
            type: LOGOUT
        }
        const action = logOut();
        expect(action).toEqual(expectOutput)
    });
    
});
