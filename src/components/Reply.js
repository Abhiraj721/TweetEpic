import React, { useState, useRef } from "react";
import "./Reply.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Replyboiler from "./Replyboiler";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faDownload,faPlus } from '@fortawesome/free-solid-svg-icons';
export default function Reply() {
  const MySwal = withReactContent(Swal);
  const [replyNo, SetreplyNo] = useState(1);
  const divToDownloadRef = useRef(null);
  const originalDisplayValues = [];
  const [imageUrl, setImageUrl] = useState(null);
  const handleinputhidden = (ele) => {
    const replyInputsElements = document.querySelectorAll(".replyinputs");
    if (ele == "beforedownload") {
      replyInputsElements.forEach((element) => {
        originalDisplayValues.push(element.style.display);
      });
      replyInputsElements.forEach((element) => {
        element.style.display = "none";
      });
    } else {
      replyInputsElements.forEach((element, index) => {
        element.style.display = originalDisplayValues[index];
      });
    }
  };

  const handleborderchange = (e) => {
  const alleditableele=document.querySelectorAll(".editable-element");
  const editableElementsArray = Array.from(alleditableele);
  console.log(editableElementsArray)
  editableElementsArray.forEach((ele) => {
    ele.style.border = e; // Replace "red" with your desired border style
  });
  };
  const tweetreplyborder = [];
  const handletweetborder=(e)=>
  {
   const replytweets= document.querySelectorAll(".replytweet");
   const editableElementsArray = Array.from(replytweets);
   console.log(editableElementsArray)
   editableElementsArray.forEach((ele) => {
     ele.style.border = e; // Replace "red" with your desired border style
   });
   }
  
  const handleDownload = (e) => {
    handletweetborder("none")
    handleborderchange("none");
    handleinputhidden("beforedownload");
    html2canvas(divToDownloadRef.current, {
      allowTaint: true,
      backgroundColor: null,
      useCORS: true,
      
    }).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      const temp = canvas.toDataURL("image/png", {
        width: 500,
        height: 300,
      });
     if( e!="swalclicked"  && e.target.className=="button-85 preview"){ MySwal.fire({
        title: 'Preview Image',
        imageUrl: temp,
        showCancelButton: true,
        confirmButtonText: 'Download',
        cancelButtonText: 'Close',
      }).then((result) => {
        if (result.value) {
          // The user clicked the "Download" button
         handleDownload("swalclicked")
        }
      });
    }
      if(e!="swalclicked" && e.target.className==="button-85 preview")return;
      const link = document.createElement("a");
      link.download = "Chat.png";
      link.href = dataURL;
      link.click();
    });
    
    handleinputhidden("afterdownload");
    handleborderchange("2px dashed");
    handletweetborder("0.1px solid rgb(119, 119, 119)")

  };


  return (
    <section className="section2" id="section2" data-aos="zoom-in-up">
  
      <h1 className="head">Reply Chain</h1>
      <br />
    <div>
    <button className="button-85 generate" style={{marginRight:"4px"}} onClick={handleDownload}>Generate Img <FontAwesomeIcon icon={faDownload} size="xl" fade style={{color: "#ffffff",}} /></button>
      <button className="button-85 preview" onClick={handleDownload} >preview Img<FontAwesomeIcon icon={faEye} size="xl" fade style={{color: "white",}} /></button>
      <div className="replymain" ref={divToDownloadRef}>
        {Array.from({ length: replyNo }).map((_, index) => (
          <div key={index}>
            <Replyboiler replyNo={replyNo}/> {/* Render the new component for each reply */}
          </div>
        ))}
      </div>

      <button className="button-85" onClick={() => SetreplyNo(replyNo + 1)}><FontAwesomeIcon icon={faPlus} size="xl" style={{color: "#ffffff",}} />   Add tweet</button>
    </div>
    </section>
  );

        }