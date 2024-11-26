import NotificationsData from './notifications.json';

export default function getAllNotificationsByUser(getId) {
    return NotificationsData.filter((data)=> data.author.id === getId).map((data) =>data.context )

    
}