"use client";
import {useState} from "react"; 

const Login = (props) => {
    const [disabled, setDisabled] = useState(false); 

    const submitHandler = (e) => {
        e.preventDefault(); 
        setDisabled(true); 
        props.client.login(e.target.username.value, e.target.password.value).then((response) => {
            setDisabled(false); 
            props.loggedIn(response.data.token);
        }).catch((err) => {
            alert("an error occured.") 
            setDisabled(false); 
        })
    }
  return (
    <div className='bg-blue-200'>
        Login
        <form onSubmit={submitHandler}>
            Username <input type="text" name="username" disabled={disabled} /> 
            Password <input type="password" name="password" disabled={disabled} /> 
            <button type="submit" disabled={disabled}>Login</button>
        </form>
    </div>
  )
}

export default Login