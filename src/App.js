import logo from './logo.svg';
import './App.css';
import Tweet from './components/Tweet';
import Input from './components/Input';
import { useState } from 'react';
import Navbar from "./components/Navbar"
import Instruction from './components/Instruction';
import Reply from './components/Reply';
import Suspension from './components/Suspension';
import Choices from './components/Choices';
import Footer from './components/Footer';


function App() {
  const [theme, settheme] = useState("dim");
  const [profilepic,Setprofilepic]=useState("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAEDAv/EADYQAAICAQIDAwgJBQAAAAAAAAABAgMEBREGIVExQXESE2GBkaGx0RQiIzJCUmLB4SVDcoOS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQISMf/aAAwDAQACEQMRAD8A0oAHVzAAAAAAAAAAAAAAAAAAAAAAAAAAABwajq+Fp3K+3ezblXDnL+CEs4x5/Z4Da6yu/gYzVqBW8bi7HnJLJxrKl+aMvLXwRPYuVRmVK3GtjbB98X2ePQYa+wADQAAAAAAAAAACG4k1d6bjKujb6TavqfoX5vkTJnOt5bztTvu/ApeRD/Fcl8/WbIyuKUpTm5TlKUpPdyk+bZ4DwpD069N1C/TcpX4737pwfZNdGcYA07CyqszGryKHvCa3XVeg+5UuCcuStuwm94yXnILo1yfxXsLaRVy6AANAAAAAAAAc+oW+YwMm7vhVKS9hmfcaPrMXLSMxR7fMz+BnBXKOngAKYAACV4YscNcxtvxeVF/8s0Azvh1OWuYaT2+vv7maIRV8/AAGNAAAAAAAAfmcY2QlCf3ZJp+DMyy8eeJk2Y9q2lXLyfHo/YaeROuaJVqkVZGSryYrZTa3Ul0ZsrLFABJZeh6lit+XiznFfiqXlr3HFLHug9p1WRfRwaK1D5A+1eLkWvaui2b6Rg2SmBwzn5M4u+H0arvc/veqPzGj68HYkrtSeRt9SiD5/qfJfuXY58DDowMWFGPHaEe99sn1fpOgirgAA0AAAAAAAAAIjU+IcLAbri3fcuThB8l4vu94Klxv6SiZfE2o3y+zlCiG/wB2tbv2s4ZanqE3vLOyX/tkv3NxPppPMGbV6pqFb3jm5Prtb+JI4nFOoU7K7zeRHv8AKj5Mvahh6i8AitL1/C1FquMnVe/7dnf4PsZKmKAAAAAAAAA2km20ku1vuBVuL9Va/p1Ett0nc107ojGWubX+Ip5MpY2BNwoXKVq5Ozw6Iro7DwuRD0HgNAAAPWWzhriCU5RwtRnvJ8qrpd/ofzKmDLGytVBEcNai9Q09K2W99P1Zt9/R+z3olyFgAAAAD4ZuRHExLsifONcHLbr0Rmlts7rZ22vec5OUn1bLpxna69IjBdllsU/Bbv8AYpBUTQAFJAAAAAAAATHCuX9G1euDe0L15t+Pd7/iX0y7HsdORVbHthNSXqZqL7SKrkABin//2Q==");
  const [customfont, Setcustomfont] = useState("none");
  const [tweetimg,Settweetimg]=useState("none")
  const [bluetick,Setbluetick]=useState("nonverified")
  const themechange = (newCount) => {
    settheme(newCount);
  };
  return (
    <div className="App">

      <Navbar></Navbar>
      <br />
      <Choices></Choices>
      <Instruction></Instruction>
      <br />
      <section className='section1' id='section1' data-aos="zoom-in-up">
        <h1  className='head'>Tweet Creator</h1>
      <div className='row'>
    <div className='col-lg-6 col-sm-12'>  <Input theme={theme} settheme={themechange} Setprofilepic={Setprofilepic} customfont={customfont} Setcustomfont={Setcustomfont} Settweetimg={Settweetimg} bluetick={bluetick} Setbluetick={Setbluetick}></Input></div>
     <br />
     <div className='col-lg-5 col-sm-12'>  <Tweet theme={theme} profilepic={profilepic} customfont={customfont} tweetimg={tweetimg} bluetick={bluetick}></Tweet> </div>
   </div>
   </section>
   <br />
   <Reply></Reply>
   <br />
   <section className='section3' id='section3'data-aos="zoom-in-up" >
   <Suspension msg="Account suspended" reason="Twitter suspends accounts that violate the" head="Suspended Account Simulator"></Suspension>
   </section>
   <br />
   <section className='section4' id='section4' data-aos="zoom-in-up">
    <Suspension msg="blocked you" reason="You are blocked from following @Username and viewing @Username’s Tweets." head="Blocked Account Simulator"></Suspension>
    </section>
    <Footer></Footer>
    </div>
  );
}

export default App;
