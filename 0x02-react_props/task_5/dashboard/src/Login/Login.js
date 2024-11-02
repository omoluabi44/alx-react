import React from 'react';
import "./Login.css"
const Login = () => {
    return (  
    <div>
        <div className='App-body'>Login to access the full dashboard </div>
    <form>
    <label htmlFor='email'>Email</label>
    <input type="email" id='email' />
    <label htmlFor='password'>password</label>
    <input type="password" id='password'/>
    <button>Ok</button>
    </form>
    </div>

    );
}
 
export default Login;