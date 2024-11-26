import React from 'react';
import { shallow } from 'enzyme'; // Import shallow for shallow rendering
import Login from './Login'; // Adjust the path as needed

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    // Shallow render the Login component before each test
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {
    // Check that the component renders without throwing an error
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags and 2 label tags', () => {
    // Check that the component contains 2 input elements
    expect(wrapper.find('input')).toHaveLength(2);
    
    // Check that the component contains 2 label elements
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
