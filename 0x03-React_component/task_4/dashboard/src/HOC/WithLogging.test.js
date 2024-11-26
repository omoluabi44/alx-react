import React from 'react';
import { shallow } from 'enzyme'; // We use shallow rendering for testing components
import withLogger from '../HOC/WithLogging'; // The HOC we want to test
import Login from '../Login/Login'; // The Login component

describe('withLogger HOC', () => {

  // Create a spy for console.log to track the calls
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock the console.log
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock data after each test
  });

  // Test 1: Check if console.log is called with 'Component Component is mounted' and 'Component Component is going to unmount' when wrapping a simple HTML element (e.g., <p />)
  it('should log mount and unmount for pure HTML elements', () => {
    // Wrap a simple HTML element like <p />
    const WrappedComponent = withLogger(() => <p />);

    // Shallow render the wrapped component
    const wrapper = shallow(<WrappedComponent />);

    // Check if console.log was called on mount
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check if console.log was called on unmount
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  // Test 2: Check if console.log is called with 'Component Login is mounted' and 'Component Login is going to unmount' when wrapping the Login component
  it('should log mount and unmount for the Login component', () => {
    // Wrap the Login component with the HOC
    const WrappedLogin = withLogger(Login);

    // Shallow render the wrapped component
    const wrapper = shallow(<WrappedLogin />);

    // Check if console.log was called on mount with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check if console.log was called on unmount with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
