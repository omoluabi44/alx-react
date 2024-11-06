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

    // Check if the Notifications component is rendered
    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    // Check if the Header component is rendered
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should NOT render Login Component when logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    // When logged in, Login should not be rendered
    expect(component.contains(<Login />)).toBe(false);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);

    // Check if the Footer component is rendered
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("should NOT render CourseList if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);

    // When logged out, CourseList should NOT be rendered
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("should render CourseList if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    // When logged in, CourseList should be rendered, and Login should NOT be
    expect(component.containsMatchingElement(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });
});
