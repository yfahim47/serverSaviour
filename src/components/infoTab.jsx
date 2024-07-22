import React from "react";
import "../styles/style.css";
import Green from "./green";
import Red from "./red";
import Yellow from "./yellow";

function InfoTab({ data, val}) {
 const envlist=data.map(e=>(e.environment.name));
 const envurl=data.map(e=>(e.url));

  return (   <div className="infoComponent">
      <div className="outerBox">
        <div className="innerBox1">
          <div className="nameTitleBox">
            <text className="textHeading">NAME</text>
          </div>
          <div className="tagTitleBox">
            <text className="textHeading">TAG</text>
          </div>
          <div className="healthTitleBox">
            <text className="textHeading">HEALTH</text>
          </div>
          <div className="descriptionTitleBox">
            <text className="textHeading">DESCRIPTION</text>
          </div>
          <div className="durationTitleBox">
            <text className="textHeading">DURATION</text>
          </div>
          <div className="detailsTitleBox">
            <text className="textHeading">DETAILS</text>
          </div>
        </div>
        <div className="innerBox2">
          <div className="nameBox">
            <text className="text">{val}</text>
          </div>
          <div className="tagBox">
            {
              envlist.map((e)=><Green name={e}/>)
            }
             
            <text className="text"></text>
          </div>
          <div className="healthBox">
            <text className="text">{data?.health}</text>
          </div>
          <div className="descriptionBox">
            <text className="text">
              {envurl.map(e=><text className="text">{e}</text>)}
            </text>
          </div>
          <div className="durationBox">
            <text className="text">
              {val === "Service A"
                ? "00:00:26:8989888"
                : val === "Service B"
                ? "00:45:56:8977867"
                : val === "Service C"
                ? "02:00:26:7879676"
                : val === "Service D"
                ? `12:00:26:2342434`
                : val === "Service E"
                ? "03:00:16:2038921"
                : null}
            </text>
          </div>
          <div className="detailsBox">
            <text className="text">{data?.details}</text>
          </div>
        </div>
        {/* <div className="innerBox3">3</div> */}
      </div>
    </div>
  );
}

export default InfoTab;
