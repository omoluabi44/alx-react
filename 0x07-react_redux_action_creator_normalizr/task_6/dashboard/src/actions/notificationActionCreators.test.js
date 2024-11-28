// src/actions/notificationActionCreators.test.js

import { markAsAread, setNotificationFilter } from './notificationActionCreators'; // Action Creators
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes'; // Action Types

describe('notification action creators', () => {
  

  it('should create an action to mark a notification as read', () => {
    const index = 1; 
    const expectedAction = {
      type: MARK_AS_READ,
      index 
    };
    const action = markAsAread(index);
    expect(action).toEqual(expectedAction);
  });

  // Test for setNotificationFilter action creator
  it('should create an action to set the notification filter to DEFAULT', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT // Expected action with DEFAULT filter
    };

    // Call the action creator with 'DEFAULT' filter and check if it matches the expected action
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
  });

  it('should create an action to set the notification filter to URGENT', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT // Expected action with URGENT filter
    };

    // Call the action creator with 'URGENT' filter and check if it matches the expected action
    expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(expectedAction);
  });

  
});
