import React, { useState } from "react";
import "./Reply";
import Replytweet from "./Replytweet";

export default function Replyboiler({replyNo}) {
  const verticalLineStyle = {
    borderLeft: "1px solid black",
    // Adjust the height as needed
  };

  const [profilepic, Setprofilepic] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAEDAv/EADYQAAICAQIDAwgJBQAAAAAAAAABAgMEBREGIVExQXESE2GBkaGx0RQiIzJCUmLB4SVDcoOS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQISMf/aAAwDAQACEQMRAD8A0oAHVzAAAAAAAAAAAAAAAAAAAAAAAAAAABwajq+Fp3K+3ezblXDnL+CEs4x5/Z4Da6yu/gYzVqBW8bi7HnJLJxrKl+aMvLXwRPYuVRmVK3GtjbB98X2ePQYa+wADQAAAAAAAAAACG4k1d6bjKujb6TavqfoX5vkTJnOt5bztTvu/ApeRD/Fcl8/WbIyuKUpTm5TlKUpPdyk+bZ4DwpD069N1C/TcpX4737pwfZNdGcYA07CyqszGryKHvCa3XVeg+5UuCcuStuwm94yXnILo1yfxXsLaRVy6AANAAAAAAAAc+oW+YwMm7vhVKS9hmfcaPrMXLSMxR7fMz+BnBXKOngAKYAACV4YscNcxtvxeVF/8s0Azvh1OWuYaT2+vv7maIRV8/AAGNAAAAAAAAfmcY2QlCf3ZJp+DMyy8eeJk2Y9q2lXLyfHo/YaeROuaJVqkVZGSryYrZTa3Ul0ZsrLFABJZeh6lit+XiznFfiqXlr3HFLHug9p1WRfRwaK1D5A+1eLkWvaui2b6Rg2SmBwzn5M4u+H0arvc/veqPzGj68HYkrtSeRt9SiD5/qfJfuXY58DDowMWFGPHaEe99sn1fpOgirgAA0AAAAAAAAAIjU+IcLAbri3fcuThB8l4vu94Klxv6SiZfE2o3y+zlCiG/wB2tbv2s4ZanqE3vLOyX/tkv3NxPppPMGbV6pqFb3jm5Prtb+JI4nFOoU7K7zeRHv8AKj5Mvahh6i8AitL1/C1FquMnVe/7dnf4PsZKmKAAAAAAAAA2km20ku1vuBVuL9Va/p1Ett0nc107ojGWubX+Ip5MpY2BNwoXKVq5Ozw6Iro7DwuRD0HgNAAAPWWzhriCU5RwtRnvJ8qrpd/ofzKmDLGytVBEcNai9Q09K2W99P1Zt9/R+z3olyFgAAAAD4ZuRHExLsifONcHLbr0Rmlts7rZ22vec5OUn1bLpxna69IjBdllsU/Bbv8AYpBUTQAFJAAAAAAAATHCuX9G1euDe0L15t+Pd7/iX0y7HsdORVbHthNSXqZqL7SKrkABin//2Q=="
  );
  const [verified, Setverified] = useState("nonverified");
  const [tweetimg, Settweetimg] = useState("none");
  return (
    <div>
      <>
        <div className="replyinputs">
          <label className="labelback" htmlFor="profileimage">
            Profile img
          </label>
          <input
            type="file"
            className="profileimage"
            accept="image/*"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              Setprofilepic(URL.createObjectURL(selectedFile));
            }}
          />
          <br />
          <label className="labelback" htmlFor="verified">
            Verified
          </label>
          <input
            type="radio"
            value={"verified"}
            checked={verified == "verified"}
            onChange={(e) => {
              Setverified(e.target.value);
            }}
            className="verified"
            id=""
          />
          <label className="labelback" htmlFor="nonverified">
            Non Verified
          </label>
          <input
            type="radio"
            value={"nonverified"}
            checked={verified == "nonverified"}
            onChange={(e) => {
              Setverified(e.target.value);
            }}
            className=" nonverified"
            id=""
          />
          <br />
          <label className="labelback" htmlFor="imgoftweet">
            Insert Image
          </label>
          <input
            type="file"
            className="imgoftweet"
            accept="image/*"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              Settweetimg(URL.createObjectURL(selectedFile));
            }}
          />
        </div>
  
        <Replytweet
          profilepic={profilepic}
          verified={verified}
          tweetimg={tweetimg}

        ></Replytweet>
      </>
    </div>
  );
}
