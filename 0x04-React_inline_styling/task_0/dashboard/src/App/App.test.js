import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should NOT render Login Component when logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("should NOT render CourseList if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("should render CourseList if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.containsMatchingElement(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  // New test to check if logOut and alert are called on 'Ctrl + H'
  it("should call logOut and show alert when 'Ctrl + H' is pressed", () => {
    // Mock the logOut function and alert
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(global, 'alert').mockImplementation(() => {});

    // Shallow render the App component with the mock function passed as a prop
    const component = shallow(<App isLoggedIn={true} logOut={logOutMock} />);

    // Simulate the 'keydown' event with 'Ctrl + H' keys pressed
    component.simulate('keydown', { ctrlKey: true, key: 'h' });

    // Verify if alert was called with the correct message
    expect(alertMock).toHaveBeenCalledWith("Logging you out");

    // Verify if the logOut function was called
    expect(logOutMock).toHaveBeenCalled();

    // Clean up mock functions
    alertMock.mockRestore();
  });
});
