import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import './App.css';
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";




function App({isLoggedIn}) {
  return (
    <>
    <Notifications/>
    <div className='App'>
      <Header />
      {isLoggedIn ? <CourseList/> : <Login/>}
      <Footer/>
    

    

   
    </div>
    </>
  );
}
App.PropTypes={
  isLoggedIn: PropTypes.bool,
}
App.defualtProps={
  isLoggedIn: false
}
export default App;
