import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { Component } from 'react';
import PropTypes from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import withLogger from "../HOC/WithLogging";
import { StyleSheet, css } from 'aphrodite';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];



class  App extends Component {


  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = (event) =>{
    if(event.ctrlKey && event.key === 'h')
    {
      alert("Logging you out")
      this.props.logOut();
    }
  }
  render(){
    const { isLoggedIn } =  this.props;
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          {isLoggedIn ? <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom>  : 
             <BodySectionWithMarginBottom title="Log in to continue"> <Login /> </BodySectionWithMarginBottom> 
          }
        
        </div>
          <BodySection title="News from the School"><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
          iste vero dolor voluptates.
            </p></BodySection>
            <Footer />
      </React.Fragment>
    );
  }
  
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () =>{},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};


const styles = StyleSheet.create({
  App: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
}
);
export default withLogger(App);

