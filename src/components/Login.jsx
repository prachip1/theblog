import React, {useState} from "react";
import Input from "./Input";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";



const Login = () =>{

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const[ fireErrors, setFireErrors] = useState("");

    const navigate = useNavigate();


    const login = (e) =>{
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
    
      .then((userCredential) => {
       
        const user = userCredential.user;
        navigate("/");

      }).catch((error) =>{
        const errorMessage = error.message;
            setFireErrors(errorMessage);
      })
    }

    return(
        <div className='flex justify-center items-center gap-6'>
        <Input placeholder="email" type="text" name="email" onChange={e=>setEmail(e.target.value)}/>
        <Input placeholder="password" type="password" name="password" onChange={e=>setPassword(e.target.value)} />
        <button onClick = {login} className='bg-green-600 p-4 rounded-full mt-4 ml-4 text-white'>Login</button>

    </div>
    )
}

export default Login;