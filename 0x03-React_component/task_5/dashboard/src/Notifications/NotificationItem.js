import React, {  PureComponent } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";


class  NotificationItem extends PureComponent  {


  render(){
    const {type, html, value ,id, markAsRead} = this.props;
    return (
      <>
        {type && value ? <li  onClick={()=>markAsRead(id)} data-notification-type={type}>{value}</li> : null}
        {html ? <li onClick={()=>markAsRead(id)}  data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );

  }
  
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
