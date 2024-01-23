import React from 'react';
import waiting from "../assets/waiting.jpg"
import "./WorkingStyles.scss";
import { useLocation} from 'react-router-dom';

export default function Working() {

  const location= useLocation()

  return (
    <div className='working'>
        <img src={waiting} alt=''/>
      <h1>Hello {location.state.id} , Oops! Ashok is still working, Be patience.</h1>
    </div>
  )
}
