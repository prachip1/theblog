import React,{useState} from 'react';
import Input from './Input';

import { useNavigate } from 'react-router-dom';

import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
const Register = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = (e) =>{

        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then(async(res) =>{
            const user=res.user;
            await updateProfile(user, {
                displayName: email,
            })
            setEmail("");
            setPassword("");
            navigate("/");
        })
       
     
        }

    

    return(
        <div className='flex justify-center items-center gap-6'>
            <Input placeholder="email" type="text" name="email" onChange={e=>setEmail(e.target.value)}/>
            <Input placeholder="password" type="password" name="password" onChange={e=>setPassword(e.target.value)} />
            <button onClick = {register} className='bg-green-600 p-4 rounded-full mt-4 ml-4 text-white'>Register/Login</button>

        </div>
    )
}

export default Register;