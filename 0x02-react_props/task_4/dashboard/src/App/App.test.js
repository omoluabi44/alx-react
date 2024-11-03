import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Adjust the path based on your project structure
import Notifications from './Notifications'; // Adjust the path based on your project structure
import Header from './Header'; // Adjust the path based on your project structure
import Login from './Login'; // Adjust the path based on your project structure
import Footer from './Footer'; // Adjust the path based on your project structure
import CourseList from './CourseList'; // Import CourseList to test its rendering

describe('<App />', () => {
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains the Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true); // Check Login is displayed when not logged in
    expect(wrapper.find(CourseList).exists()).toBe(false); // Check CourseList is not displayed
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  describe('when isLoggedIn is true', () => {
    it('does not display the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />); // Pass isLoggedIn as true
      expect(wrapper.find(Login).exists()).toBe(false); // Check Login is not displayed
    });

    it('displays the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />); // Pass isLoggedIn as true
      expect(wrapper.find(CourseList).exists()).toBe(true); // Check CourseList is displayed
    });
  });
});
