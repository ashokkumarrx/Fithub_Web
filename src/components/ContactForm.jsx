import "./ContactFormStyles.scss";
import React,{useState} from "react";
import axios from "axios";

function ContactForm(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')

    async function send(e){
        e.preventDefault();
    
        try{
            await axios.post("http://localhost:8001/contact",{
              name,email,subject
            })
            }
        catch(e){
            console.log(e);
        }
      }
    return(
        <div className="from-container">
            <br></br><br></br><br></br>
            <h1>Feel free to drop us a message with the specifics you 
                need assistance with. We'll make sure to address your query swiftly!</h1>
            <form>
                <input type='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Name' name='' id=''/>
                <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='' id='' />
                <input type='subject' onChange={(e)=>{setSubject(e.target.value)}} placeholder='Subject' name='' id='' />
                <textarea placeholder="Message" rows="4"></textarea>
                <br></br>
                <button onClick={send}>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;