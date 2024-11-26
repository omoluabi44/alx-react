import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {

  // Test case 1: Ensure Notifications renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test case 2: Verify that Notifications renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul li").length).toBe(3);
  });

  // Test case 3: Verify that Notifications renders the correct text
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });

  // New test cases for displayDrawer behavior

  // Test case 4: Check that menuItem is displayed when displayDrawer is false
  it('displays menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  // Test case 5: Check that div.Notifications is not displayed when displayDrawer is false
  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  // Test case 6: Check that menuItem is displayed when displayDrawer is true
  it('displays menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  // Test case 7: Check that div.Notifications is displayed when displayDrawer is true
  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});
