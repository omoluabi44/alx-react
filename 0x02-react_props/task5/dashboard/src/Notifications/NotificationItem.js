import React from "react";
import "./Notifications.css"
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value }) => {
    return ( 
        <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : undefined}>
            {value && !html ? value : null}
        </li>
    );
}
NotificationItem.prototype = {
    type: PropTypes.string.isRequired,
    __html: PropTypes.shape({
        html:PropTypes.string,
    }),
};
NotificationItem.defaultProps = {
    type: "default"
}

export default NotificationItem;

