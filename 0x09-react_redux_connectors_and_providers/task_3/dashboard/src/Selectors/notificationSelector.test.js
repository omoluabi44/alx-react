import { fromJS } from "immutable";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";

const state = fromJS({
  filter: "DEFAULT",
  notifications: [
    { id: 1, type: "default", value: "New course available", isRead: false },
    { id: 2, type: "urgent", value: "New resume available", isRead: true },
    { id: 3, type: "urgent", value: "New data available", isRead: false },
  ],
});

test("filterTypeSelected works as expected", () => {
  const result = filterTypeSelected(state);
  expect(result).toEqual("DEFAULT"); // Expect the filter value from the state
});

test("getNotifications returns a list of the message entities within the reducer", () => {
  const result = getNotifications(state);
  expect(result.toJS()).toEqual([
    { id: 1, type: "default", value: "New course available", isRead: false },
    { id: 2, type: "urgent", value: "New resume available", isRead: true },
    { id: 3, type: "urgent", value: "New data available", isRead: false },
  ]);
});

test("getUnreadNotifications returns a list of the message entities within the reducer", () => {
  const result = getUnreadNotifications(state);
  expect(result.toJS()).toEqual([
    { id: 1, type: "default", value: "New course available", isRead: false },
    { id: 3, type: "urgent", value: "New data available", isRead: false },
  ]);
});
