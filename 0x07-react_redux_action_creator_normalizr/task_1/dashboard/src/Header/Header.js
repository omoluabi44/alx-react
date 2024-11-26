import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import userContext from "../App/AppContext"; 

class Header extends Component{
  static contextType =userContext;
  render(){
    const {user, logOut} = this.context;
    return (
      <>
        <div className={css(styles["App-header"])}>
          <img src={logo} className={css(styles.img)} alt="logo" />
          <h1>School dashboard</h1>
      
            {user.isLoggedIn === true ? (  
              <section id="logoutSection " >
              <p> Welcome {user.email}! <span onClick={logOut} style={ {cursor:"pointer"}}>logout</span></p> 
              </section>)
            :
            
            ( null)}
          
        </div>
       
      </>
    );
  }

}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
