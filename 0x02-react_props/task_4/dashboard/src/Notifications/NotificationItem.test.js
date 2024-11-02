// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  const notifications = [
    { type: 'info', html: '<strong>Info:</strong> Your settings have been saved.', value: 'Settings Updated' },
    { type: 'warning', html: '<strong>Warning:</strong> Please check your email.', value: 'Email Alert' },
  ];

  test('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications notifications={notifications} />);
    
    // Check if NotificationItem components are rendered
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  test('renders the correct HTML for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications notifications={notifications} />);
    
    // Get the first NotificationItem and check its props
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    
    // Check that the correct HTML is rendered
    expect(firstNotificationItem.prop('html')).toEqual({ __html: '<strong>Info:</strong> Your settings have been saved.' });
  });
  
  // Add more tests as needed...
});
