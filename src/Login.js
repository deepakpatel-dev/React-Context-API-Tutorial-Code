import React from 'react'
import { useStateValue } from './StateProvider';

const Login = ({setUser}) => {
    const [state,dispatch] = useStateValue();

    const loginToApp = () => {
        // Do Some login stuff
        // {props.setUser}
       dispatch({
           type: 'SET_USER',
           user:"Deepak is here!"

       })
    };
    return (
        <div>
            <h1>I am the login component</h1>
            <button onClick={loginToApp}>LOGIN</button>
        </div>
            
    )
}

export default Login
