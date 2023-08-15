import React from 'react'
import { useRef } from 'react'
export default function Navcard({imgurl,title}) {
  const titleref=useRef(null);
  const scrollArr={
    "Tweet":"section1",
    "reply chain" :"section2",
    "Suspend":"section3",
    "Block":"section4",
  }
  function scrollToSection(e) {
    let sectionToScroll = titleref.current.innerText;
    console.log(sectionToScroll);
    
    let scroll = scrollArr[sectionToScroll];
    console.log(scroll);
    
    let section = document.getElementById(scroll); // Replace "section2" with the ID of the target section
    
    if (section) {
      const scrollPosition = section.offsetTop; // Get the top offset of the section
    
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  }
  
  return (
    <div className='navcard' data-aos="zoom-in-right" >
      <button className='navcardbtn' onClick={scrollToSection}>
      <img className='imgofnav' src={imgurl} alt="" />
      <p ref={titleref}  className='titleofnavcard'>{title}</p>
      </button>
    </div>
  )
}
