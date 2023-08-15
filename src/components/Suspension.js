import React, { useState,useRef } from "react";
import "./Suspension.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Reply.css"
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faDownload } from '@fortawesome/free-solid-svg-icons';
export default function Suspension({msg,reason,head}) {
  const [suspendedpp, Setsuspendpp] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAECA//EADUQAAICAQICBggEBwAAAAAAAAABAgMEBREGITFRYYGRoRIiQUJSccHRIzJisRMUFSRDc/D/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGREBAQEBAQEAAAAAAAAAAAAAAAEREgIx/9oADAMBAAIRAxEAPwDSgAdXMAAAAAAAAAAAAAAAAAAAAAAAAAAAEZqWu4WntwnN2XL/ABV82vm+hELPjGzf1MGO36rH9hjNW0FaxeLqJy2ysadS+KD9JeHIn8XJoy6VbjWxtrfvR/7kMNfsAA0AAAAAAAAAAAgeKNYlgUrGxXtkWrdy+CPX82T3zeyM01LLednXZL32nL1d/h9nkbIyubdt7ttt9LYB4Uh6dulaldpmSrqfWjLlZW+iaOEAahjX15NEL6ZelXZH0os/UrHBOW5V34cnyh+JDsT5P6eJZyKuXQABoAAAAAAADj1i10aVmWLpVMtn27bGb9BomvxctFzEulVN+BnZXlHp4ACmAAAnOD5uOtJL36pRfk/oXkofCUfS1yp77ejGT8i+EVc+AAMaAAAAAAAA+La421Tqn+ScXGXyaMzy8ezEyLMe5bTrls+3tNPIvWtFo1SKk5Oq+K2ViW+66mbKyxnwJfK4c1OiT2oV0fiqe+/d0nHLTM+D2lhZKf8ApkVqHIDtq0nUbXtDCyPnKtxXiyX0/hPIsmpZ841V/BW95Pv6F5jR+nBOHJ23ZsuUFH+HDte6b/ZLvLafFNVdFUaqYKFcFtGK9iPshcAAGgAAAAAAAAPG0k22kl0t+wr+pcU49DdeFBZE1yc3ygvuMZbiwgzvK1vUsmW9mVOMfhq9RLw5+JxO2yXOdk5Ptk2bjOmogy+vIvqe9d1sH1xm0SeHxHqWO0pXK+C921b+fSOTpfQQ+lcRYmoONc/7e99EJvlJ9j+hMGKAAAAAAAAD4tsrprlZbJQrgt5SfsR9lN4u1R33vApl+FU/xNvel1d37iRluOXXddt1Kbqq3rxE+UfbPtf2IcHheIengBoAAA+Za+Gdfk5Rwc+e7fKq1vm/0v6FUBljZWqsEXw7qH9Q06Mpve6v1LO19ff9yUIWAAAAAOXVMv8AkdPvyfbCPqrrk+S8zNXJyblJ7yfNvrZc+NpuOmUwXRK5b9yZSyomgAKSAAAAAAAAneD8p06o6H+W+DXeua+viXgzbR5uGrYco9P8aK8XsaSRV+QAGNf/2Q=="
  );

  const [bluetick,Setbluetick]=useState("nonverified")
  const [customfont, Setcustomfont] = useState("none");
  const [theme, settheme] = useState("light");
  const divToDownloadRef=useRef(null);
  const handlethemechange = (e) => {
    settheme(e.target.value);
  };
  const styleformid={
    
    backgroundColor: theme === "light" ? "white" : theme === "dim" ? "#171f2a" : " #000000",
    color:theme==="light" ? "black" :theme==="dim" ? "white" :"white",
 
    
  }
  const stylefornav={
    backgroundColor: theme === "light" ? "#ced5dc" : theme === "dim" ? "#415364" : " #2f3235",
  }
  const styleforpagewindow={
   
    backgroundColor: theme === "light" ? " #e7ecf0" : theme === "dim" ? "#11161d" :  "#15171b",
    color:theme==="light" ? "black" :theme==="dim" ? "white" :"white",
    fontFamily:customfont=="none" ? '"Inter", "Helvetica Neue", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' : customfont

  }
  const [imageUrl, setImageUrl] = useState(null);
  const handleborderchange = (e) => {
    const alleditableele=document.querySelectorAll(".editable-element");
    const editableElementsArray = Array.from(alleditableele);
    console.log(editableElementsArray)
    editableElementsArray.forEach((ele) => {
      ele.style.border = e; // Replace "red" with your desired border style
    });
    };
  const handleDownload = (e) => {
    handleborderchange("none");
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
     if( e!="swalclicked"  && e.target.className=="button-85 preview"){ Swal.fire({
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
    
    handleborderchange("2px dashed");
  };
  return (
   
  
      <div className="row">
              <br />
        <h1 className="head">{head}</h1>
      <br />
        <div className="col-lg-6 col-sm-12">
         

            <div className="someinputs">
            <h4>Settings</h4>
              <p>background color</p>
              <label className="labelback" htmlFor="light">
                Light
              </label>
              <input
                checked={theme === "light"}
                value={"light"}
                onChange={(e) => {
                  handlethemechange(e);
                }}
                className=" light"
                type="radio"
              />
              <label className="labelback" htmlFor="dim">
                Dim
              </label>
              <input
                checked={theme === "dim"}
                value={"dim"}
                onChange={(e) => {
                  handlethemechange(e);
                }}
                className=" dim"
                type="radio"
              />
              <label className="labelback" htmlFor="dark">
                Dark
              </label>
              <input
                checked={theme === "dark"}
                value={"dark"}
                onChange={(e) => {
                  handlethemechange(e);
                }}
                className=" dark"
                type="radio"
              />
              <br />
              <br />
              <label htmlFor="ppimg">Profile pic</label>
              <input
                className="ppimg"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  Setsuspendpp(URL.createObjectURL(selectedFile));
                }}
              />
              <br /><br />
              <div className="selectfont">
              <label className="labelback" htmlFor="defaultfont">
                Default font
              </label>
              {console.log(customfont)}
              <input
                type="radio"
                onChange={(e) => {
                  Setcustomfont("none");
                }}
                checked={customfont == "none"}
                className="defaultfont"
              />
              <label className="labelback" htmlFor="">
                Custom font
              </label>
      
              <select
                id="customFont"
                onChange={(e) => {
                  Setcustomfont(e.target.value);
                }}
              >
                <option value="none">none</option>
                <option value="Playfair Display">Playfair Display</option>
                <option value="Quicksand">Quicksand</option>
                <option value="Raleway">Raleway</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Source Sans Pro">Source Sans Pro</option>
                <option value="Ubuntu">Ubuntu</option>
                <option value="Oswald">Oswald</option>
                <option value="Merriweather">Merriweather</option>
                <option value="PT Sans">PT Sans</option>
                <option value="Amatic SC">Amatic SC</option>
                <option value="Cabin">Cabin</option>
                <option value="Comfortaa">Comfortaa</option>
                <option value="Dosis">Dosis</option>
                <option value="Exo">Exo</option>
                <option value="Fira Sans">Fira Sans</option>
                <option value="Gothic A1">Gothic A1</option>
                <option value="Hind">Hind</option>
                <option value="IBM Plex Sans">IBM Plex Sans</option>
                <option value="Josefin Sans">Josefin Sans</option>
                <option value="Karla">Karla</option>
              </select>
              </div>
              <br />
             
              <br /><br />
              {console.log(bluetick+"56")}
        <label className="labelback" htmlFor="nonveri">Non-Verified</label>
        <input className="nonveri" checked={bluetick=="nonverified"}  value={"nonverified"} onChange={(e)=>{
          Setbluetick(e.target.value)
        }} type="radio"  />
        <label className="labelback" htmlFor="verified">Verified</label>
        <input className="verified" checked={bluetick=="verified"} value={"verified"}  onChange={(e)=>{
          console.log(e.target.value+"3")
          Setbluetick(e.target.value)
        }} type="radio"  />
            </div>
            <button className="button-85 generate" style={{marginRight:"4px"}} onClick={handleDownload}>Generate Img <FontAwesomeIcon icon={faDownload} size="xl" fade style={{color: "#ffffff",}} /></button>
      <button className="button-85 preview" onClick={handleDownload} >preview Img<FontAwesomeIcon icon={faEye} size="xl" fade style={{color: "white",}} /></button>
        </div>
        <div className="col-lg-6 col-sm-12 pagewindow" style={styleforpagewindow} ref={divToDownloadRef}>
   
          <div className="abovenav" style={stylefornav}></div>
          <div className="midpagesuspend" style={styleformid}></div>
          <img className="suspendprofilepic" src={suspendedpp} alt="" />
          <div style={{  color:theme==="light" ? "black" :theme==="dim" ? "white" :"white"}}>
          <p className="suspendname editable-element" contentEditable>
            <b>Name {bluetick == "verified" ? (
                <svg className="bluetick" viewBox="0 0 24 24">
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              ) : (
                ""
              )}</b>{" "}
          </p>
          <p className="suspendusername editable-element" contentEditable>
            @Username
          </p>
          </div>
          <p className="noticeofsuspend">
         {msg!= "Account suspended" ? <span className="editable-element" contentEditable>@Username</span> : ""}  <b>{msg}</b>
          </p>
          <p className="noticebrief container">
           {reason=="You are blocked from following @Username and viewing @Username’s Tweets." ?  <p>You are blocked from following <span className="editable-element" contentEditable> @Username </span>and viewing  <span className="editable-element" contentEditable> @Username </span> Tweets.</p> : reason}
          { msg==="Account suspended" ? <span className="editable-element" style={{ color: "#70a1ff" }}>Twitter Rules.</span> : ""}
          </p>
        </div>
      </div>
    
  );
}
