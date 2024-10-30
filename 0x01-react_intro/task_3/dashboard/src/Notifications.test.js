// import React from 'react';
// import { shallow } from 'enzyme';
// import Notifications from './Notifications';

// describe('<Notifications />', () => {
//   it('it render without crashing', () => {
//     const wrapper= shallow(<Notifications/>);
//     expect(wrapper.exists().toBe(true))
    
//   });
//   it('renders a div with the class App-header', () => {
//     const wrapper = shallow(<Notifications/>);
//     expect(wrapper.find("ul li").toBe(3))
    
//   });
 
//   it('renders a div with the class  App-footer', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find(".App-footer").toBe("Here is the list of notifications"))
    
//   });
  
// });

import React from 'react'; // Import React
import { shallow } from 'enzyme'; // Import shallow from Enzyme
import Notifications from './Notifications'; // Import the Notifications component

describe('<Notifications />', () => {
  
  // Test case 1: Ensure Notifications renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true); // Corrected: Use exists() to check if the component rendered
  });
  
  // Test case 2: Verify that Notifications renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul li").length).toBe(3); // Corrected: Check the length of list items
  });
 
  // Test case 3: Verify that Notifications renders the correct footer text
  it('renders the footer with the correct text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("Here is the list of notifications"); // Corrected: Check if the text exists
  });
  
});
