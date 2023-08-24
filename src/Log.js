import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login=(props) => {
    const [email,setEmail] =useState('');
    const [pass,setPass]=useState('');

const handleSubmit =(e) =>{
e.preventDefault();
console.log(email);
}


    return(
       <> <form className='form-control container' onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Mail ID" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button onClick={()=>props.OnFormSwitch('register')}>Don't have an Account? Register here.</button>
        </>


    )
}