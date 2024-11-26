import { schema, normalize } from 'normalizr';
import NotificationsData from './notifications.json';



const user = new schema.Entity("users")
const message = new schema.Entity("messages" ,{}, {idAttribute: 'guid'});
const notification = new schema.Entity("notifications",
    {
        author:user,
        context:message
    }
)

const normalized = normalize(NotificationsData, [notification]);

export default function getAllNotificationsByUser(getId) {
    return NotificationsData.filter((data)=> data.author.id === getId).map((data) =>data.context )
}

export {normalized}