import React from 'react'

const LoginPanel = (props) => {
    return(
        <div className="loginPanel">
            <div className= "div-login-input">
                <label htmlFor="username" className="loginLabel"> User Name</label>
                <input type="text" id= "username" className="inp-username"/>
            </div>
            <div className= "div-login-input">
                <label htmlFor="password" className= "loginLabel">Password</label>
                <input type="password" id="password" className = "inp-username"/>
            </div>
            <button onClick={props.clickLogin} className = "btn-login">Login</button>
        </div>
    )
}

export default LoginPanel;