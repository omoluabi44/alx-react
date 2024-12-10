import * as notificationData from "../../dist/notifications.json"
import { normalize, schema } from "normalizr";

// Define schema entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

// Normalize the notification data
const normalized = normalize(notificationData, [notification]);

// Function to get all notifications for a specific user
export function getAllNotificationsByUser(userId) {
  const output = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }

  return output;
}

// Export normalized data and notificationsNormalizer
export { normalized };
export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}
