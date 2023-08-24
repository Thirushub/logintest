import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Register=(props) => {
    const [email,setEmail] =useState('');
    const [pass,setPass]=useState('');
    const [name,setname]=useState('');
const handleSubmit =(e) =>{
e.preventDefault();
console.log(email);
}


    return(
       <> <form onSubmit={handleSubmit}>
         <label htmlFor="name">Full Name</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Your Name..." id="name" name="firstname" />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Mail ID" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button onClick={()=>props.onFormSwitch('login')}>Already have an account.</button>
        </>


    )
}