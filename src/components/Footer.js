import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart  } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div className='footer'>
        <br />
      <footer style={{lineHeight:"12px"}}>
     <p> © 2023 TweetEpic. All rights reserved</p>
     <p> Made with <FontAwesomeIcon icon={faHeart} beatFade style={{color: "#f2542c",}} /> by Abhiraj</p>
     <br />
      </footer>
    </div>
  )
}
