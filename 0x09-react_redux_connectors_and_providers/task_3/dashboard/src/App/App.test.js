// /**
//  * @jest-environment jsdom
//  */
// import React from "react";
// import App from "./App";
// import Login from "../Login/Login";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Notifications from "../Notifications/Notifications";
// import CourseList from "../CourseList/CourseList";
// import { shallow, mount } from "enzyme";
// import { StyleSheetTestUtils } from "aphrodite";
// import { AppContext, user, logOut } from "./AppContext";

// beforeEach(() => {
//   StyleSheetTestUtils.suppressStyleInjection();
// });
// afterEach(() => {
//   StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// describe("rendering components", () => {
//   it("renders App component without crashing", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.exists()).toBe(true);
//   });

//   it("contains Notifications component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.find(Notifications)).toHaveLength(1);
//   });

//   it("contains Header component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.contains(<Header />)).toBe(true);
//   });

//   it("contains Login component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.find(Login)).toHaveLength(1);
//   });

//   it("contains Footer component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.contains(<Footer />)).toBe(true);
//   });

//   it("checks CourseList is not rendered", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.contains(<CourseList />)).toBe(false);
//   });
// });

// describe("when isLogged in is true", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.state().user).toEqual(user);

//   it("checks Login is not rendered", () => {
//     expect(wrapper.contains(<Login />)).toBe(false);
//   });

//   it("checks CourseList is rendered", () => {
//     expect(wrapper.find(CourseList)).toHaveLength(0);
//   });

//   it(`Tests that the logIn function updates user's state correctly`, () => {
//     const wrapper = mount(
//       <AppContext.Provider value={{ user, logOut }}>
//         <App />
//       </AppContext.Provider>
//     );

//     const myUser = {
//       email: "testy@gmail.com",
//       password: "testy",
//       isLoggedIn: true,
//     };

//     expect(wrapper.state().user).toEqual(user);
//     const instance = wrapper.instance();
//     instance.logIn(myUser.email, myUser.password);
//     expect(wrapper.state().user).toEqual(myUser);
//     wrapper.unmount();
//   });

//   it(`Tests that the logOut function updates user's state correctly`, () => {
//     const wrapper = mount(
//       <AppContext.Provider value={{ user, logOut }}>
//         <App />
//       </AppContext.Provider>
//     );

//     const myUser = {
//       email: "testy@gmail.com",
//       password: "testy",
//       isLoggedIn: true,
//     };

//     expect(wrapper.state().user).toEqual(user);
//     const instance = wrapper.instance();
//     instance.logOut();
//     expect(wrapper.state().user).toEqual(user);
//     wrapper.unmount();
//   });
// });

// describe("testing state of App.js", () => {
//   it("displayDrawer initial value should be set to false", () => {
//     const wrapper = mount(<App />);

//     expect(wrapper.state().displayDrawer).toBe(false);
//   });

//   it("should set displayDrawer to true after calling handleDisplayDrawer", () => {
//     const wrapper = shallow(<App />);
//     wrapper.instance().handleDisplayDrawer();

//     expect(wrapper.state().displayDrawer).toBe(true);
//   });

//   it("should set displayDrawer to false after calling handleHideDrawer", () => {
//     const wrapper = shallow(<App />);
//     wrapper.instance().handleHideDrawer();

//     expect(wrapper.state().displayDrawer).toBe(false);
//   });
// });

// describe("markNotificationAsRead works as intended", () => {
//   it(`verify that markNotificationAsRead works as intended, deletes the notification with the passed id from the listNotifications array`, () => {
//     const context = {
//       user: {
//         ...user,
//       },
//       logOut: jest.fn(),
//       listNotifications: [
//         { id: 1, type: "default", value: "New course available" },
//         { id: 2, type: "urgent", value: "New resume available" },
//         { id: 3, html: { __html: jest.fn() }, type: "urgent" },
//       ],
//     };

//     const wrapper = mount(
//       <AppContext.Provider value={context}>
//         <App />
//       </AppContext.Provider>
//     );

//     const instance = wrapper.instance();

//     instance.markNotificationAsRead(3);

//     expect(wrapper.state().listNotifications).toEqual([
//       { id: 1, type: "default", value: "New course available" },
//       { id: 2, type: "urgent", value: "New resume available" },
//     ]);

//     expect(wrapper.state().listNotifications.length).toBe(2);
//     expect(wrapper.state().listNotifications[3]).toBe(undefined);

//     wrapper.unmount();
//   });
// });


// import { mapStateToProps } from "./App"; // Import mapStateToProps
// import { fromJS } from "immutable"; // Immutable.js to create a state from plain JS object
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from "./App";

// describe("mapStateToProps", () => {
//   const mockLogin = jest.fn();
//   it("should return the correct isLoggedIn value when passing the state", () => {
//     // Creating the state using Immutable's fromJS
//     const state = fromJS({
//       isUserLoggedIn: true, // This is the state from the uiReducer
//     });

//     // Pass the state to mapStateToProps and check the returned result
//     const result = mapStateToProps(state);

//     // Check that the function returns the expected object
//     expect(result).toEqual({ isLoggedIn: true });
//   });

//   it('renders CourseList when logged in', () => {
//     const props = {
//       isLoggedIn: true,
//       user: {
//         email: 'user@example.com',
//         isLoggedIn: true,
//       },
//       login: mockLogin,
//     };

//     render(<App {...props} />);
    
//     expect(screen.getByText('Course list')).toBeInTheDocument();
//     expect(screen.queryByText('Log in to continue')).not.toBeInTheDocument();
//   });
//   it('renders Login when not logged in', () => {
//     const props = {
//       isLoggedIn: false,
//       user: {},
//       login: mockLogin,
//     };

//     render(<App {...props} />);
    
//     expect(screen.getByText('Log in to continue')).toBeInTheDocument();
//     expect(screen.queryByText('Course list')).not.toBeInTheDocument();
//   });
// });
import { Map } from 'immutable';
import { mapStateToProps } from './App';

describe('App - mapStateToProps', () => {
  it('should map the correct state to props', () => {
    const state = {
      ui: Map({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
