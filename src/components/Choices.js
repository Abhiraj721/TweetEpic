import React from 'react'
import block from "./images/block.png"
import suspend from "./images/suspend.png"
import reply from "./images/reply.jpg"
import tweet from "./images/tweet.png"

import Navcard from './Navcard'
import "../App.css"
export default function Choices() {
  return (
    <div  >
      <h3 data-aos="zoom-in-left" >What would you like to create?</h3>
      <div className='row'>     
      <div className='col col-lg-3 col-md-6 col-sm-6'>
      <Navcard imgurl={tweet} title={"Tweet"}></Navcard>
      </div>
      <div className='col col-lg-3 col-md-6 col-sm-6'>
      <Navcard imgurl={reply} title={"reply chain"}></Navcard>
        </div>
        <div className='col col-lg-3 col-md-6 col-sm-6'>
        <Navcard imgurl={block} title={"Block"}></Navcard>
        </div>
        <div className='col col-lg-3 col-md-6 col-sm-6'>
        <Navcard imgurl={suspend} title={"Suspend"}></Navcard>
        </div>
        </div>
    </div>
  )
}
