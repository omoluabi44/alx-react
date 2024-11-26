import React, { useContext } from "react";
import "./Footer.css";

import userContext from "../App/AppContext"; 
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  const {user} = useContext(userContext)
  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn === true ?(
          <p>Contact us</p>
        ):(
        <div>
            Copyright {getFullYear()} - {getFooterCopy()}
        </div>
        )}
        
      </div>
    </>
  );
}

export default Footer;
