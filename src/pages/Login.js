import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/mix.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {sentOtpFunction} from "../services/Apis";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

//send otp 
const sendOtp = async(e)=>{
  e.preventDefault();

  if(email=== ""){
      toast.error("Enter Your Email!")
  }else if(!email.includes("@")){
    toast.error("Enter Valid Email!")
  }else{
       const data = {email:email}
       const response = await sentOtpFunction(data);
       if(response.status === 200){
            navigate("/users/otp",{state:email})
       }else{
        toast.error(response.response.data.error);
       }
  }
}


  return (
    <>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please Login</p>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input type="email" name='email' id="" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email Address'></input>
            </div>
            <button className='btn' onClick={sendOtp}>Login</button>
            <p>Don't have an account? <NavLink to="/register">Sign Up</NavLink></p>
          </form>

        </div>
        <ToastContainer />
      </section>
      
    </>
  )
}

export default Login