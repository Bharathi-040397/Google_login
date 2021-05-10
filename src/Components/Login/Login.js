import React from 'react'
import { Avatar } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import {useDispatch} from 'react-redux'
import '../../Css/Login.css'
import { login } from '../../Redux/Action/User'


function Login() {

    const dispatch = useDispatch()
    const history = useHistory();

    const responseGoogle = (response) => {
        localStorage.setItem("user", JSON.stringify(response.profileObj));
        dispatch(login(response.profileObj));
        history.push('/home');
    }
    return (
          <div className="login_container">
          <div className="card login">
          <Avatar className="login_icon" alt="" src="https://t3.ftcdn.net/jpg/02/37/09/88/360_F_237098808_t4lMaQCHh3fH9YvVxzUdS7XmOyinQOj9.jpg"/>
           <GoogleLogin
           clientId="445695924294-52eeh8m2eutep5ne6al563klvjje6c7m.apps.googleusercontent.com"
           buttonText="Login with Google"
           onSuccess={responseGoogle}
           onFailure={responseGoogle}
           cookiePolicy={'single_host_origin'}
           />
        </div>
        </div>  
       
    )
}

export default Login
