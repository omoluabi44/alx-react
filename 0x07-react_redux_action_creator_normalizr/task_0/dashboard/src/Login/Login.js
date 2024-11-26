import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);

   this.state ={
    email: "",
    password:"",
    enableSubmit:false,
  };
   this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
   this.handleChangeEmail = this.handleChangeEmail.bind(this);
   this.handleChangePassword = this.handleChangePassword.bind(this)
  }
  handleLoginSubmit (event){
    event.preventDefault();
    const {email, password} = this.state;
    this.props.logIn(email, password)
  }
  handleChangeEmail (e){
    this.setState({email: e.target.value}, this.enableSubmitButton)

  }
  handleChangePassword(e){
    this.setState({password: e.target.value}, this.enableSubmitButton)
  }
  enableSubmitButton(){
    const {email, password} = this.state;
    if(email && password){
      this.setState({enableSubmit:true})

    }
    else{
      this.setState({enableSubmit:false})
    }
  }
render(){
  return (
    <>
        <div className={css(styles["App-body"])}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChangePassword}
            />
            <input
              type="submit"
              value="Submit"
              disabled={!this.state.enableSubmit}
            />
          </form>
        </div>
      </>
  );
}
}
  

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;
