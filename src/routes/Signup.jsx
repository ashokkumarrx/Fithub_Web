import React,{useState} from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import './SignupStyles.scss'

export default function SignUp() {
  const history=useNavigate();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/signup",{
          name,email,password
        })
        .then(res=>{
            if(res.data=="exist"){
                alert("user already exits");
            }
            else if(res.data=="notexist"){
              history("/working",{state:{id:name}})
            }
          })
          .catch(e=>{
              alert("wrong details");
              console.log(e);
          })
    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <div className='login'>
      <h1>SignUp</h1>
       
      <form action='POST'>
        <h5>Name:</h5>
        <input type='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter name' name='' id=''/>
        <h5>Email:</h5>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter email' name='' id='' />
        <h5>Password:</h5>
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' name='' id=''/>
        <br></br><br></br>
        <input type="submit" onClick={submit} value="SignUp"/>

      </form>

      <br/>
      <p>Already have an account?</p>
      <Link to="/login">Login Page...</Link>
    </div>
  )
}
