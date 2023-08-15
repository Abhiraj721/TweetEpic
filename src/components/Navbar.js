import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <div>
        <h1  className='mainhead' data-aos="fade-up"
     data-aos-duration="1300" style={{marginTop:"4px"}}>TweetEpic <span><i class="fa-brands fa-twitter fa-bounce" style={{color: "#7ad7ff"}}></i></span></h1>
        
    </div>
  )
}
