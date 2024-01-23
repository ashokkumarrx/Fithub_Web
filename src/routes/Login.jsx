import React,{useState} from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

export default function Login() {

  const history=useNavigate();


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/login",{
          email,password
        })
        .then(res=>{
          if(res.data == "exist"){
            history("/working",{state:{id:email}})
          }
          else if(res.data == "notexist"){
            alert("user not signed yet")
          }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <div className='login'>
      <h1>Login</h1>
       
      <form action='POST'>
        <h5>Email:</h5>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter email' name='' id='' />
        <h5>Password:</h5>
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' name='' id=''/>
        <br></br><br></br>
        <input type="submit" onClick={submit} value="Login" />

      </form>

      <br/>
      <p>Don't have an account?</p>
      <Link to="/signup">Signup...</Link>
    </div>
  )
}
