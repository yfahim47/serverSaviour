import React, { useState } from "react";
import "../styles/sideNavStyles.css";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const [clicked, setClicked] = useState(1);
  const navigate = useNavigate();
  const handleClick = (e) => {
    setClicked(e);
    if(e===1){
        navigate("/");
    }else{
        navigate("/webhooks")
    }
  };

  return (
    <div className="sideNav">
      <img className="imageStyle" src={logo} />
      <button
        className={clicked === 1 ? "buttonStyleActive" : "buttonStylePassive"}
        onClick={() => {
          handleClick(1);
        }}
      >
        <text className="sideNavButtonText">Health Check</text>
      </button>
      <button
        className={clicked === 2 ? "buttonStyleActive" : "buttonStylePassive"}
        onClick={() => {
          handleClick(2);
        }}
      >
        <text className="sideNavButtonText">Webhooks</text>
      </button>
    </div>
  );
}

export default SideNav;
