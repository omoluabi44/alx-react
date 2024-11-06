import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { Component } from 'react';
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

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
  // constructor(props) {
  //   super(props);

  //   this.handleKeyDown = this.handleKeyDown.bind(this);
  // }

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
        <div className="App">
          <div className="heading-section">
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
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

export default App;

