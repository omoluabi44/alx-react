import React from "react";
const userDefault ={
    email:"", password:"", isLoggedIn:false
}
function defaultLogOut() {
    console.log("loging out");
    
    
}
const userContext = React.createContext({
    user:userDefault, logOut: defaultLogOut,
})

export default userContext