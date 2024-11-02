import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Adjust the path based on your project structure
import Notifications from './Notifications'; // Adjust the path based on your project structure
import Header from './Header'; // Adjust the path based on your project structure
import Login from './Login'; // Adjust the path based on your project structure
import Footer from './Footer'; // Adjust the path based on your project structure

describe('<App />', () => {
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true); // Fixed this line
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
