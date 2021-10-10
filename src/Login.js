import React from 'react'

const Login = ({setUser}) => {
    const loginToApp = () => {
        // Do Some login stuff
        // {props.setUser}
    };
    return (
        <div>
            <h1>I am the login component</h1>
            <button onClick={loginToApp}>LOGIN</button>
        </div>
            
    )
}

export default Login
