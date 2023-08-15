import React, { useState } from "react";

export default function Input({
  theme,
  settheme,
  Setprofilepic,
  customfont,
  Setcustomfont,
  Settweetimg,
  bluetick,
  Setbluetick,
}) {
  const handlethemechange = (e) => {
    settheme(e.target.value);
  };
  return (
    <div>
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
            Setprofilepic(URL.createObjectURL(selectedFile));
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
        <label htmlFor="imageoftweet">Insert image</label>
        <input type="file"
        className="imageoftweet"
        accept="image/*"
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          Settweetimg(URL.createObjectURL(selectedFile));
        }} />
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
    </div>
  );
}
