import React from "react";
import "../styles/style.css";
import Green from "./green";
import Red from "./red";
import Yellow from "./yellow";

function InfoTab({ data, index }) {
  const key = Object.keys(data)[0];
  console.log(key);
  return (
    <div className="infoComponent">
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
            <text className="text">{key}</text>
          </div>
          <div className="tagBox">
            {key === "Service A" ? (
              <>
                <Green name={"Liberty"} />
                <Yellow name={"SIT-01"} />
                <Green name={"SIT-02"} />
                <Red name={"SIT-03"} />
              </>
            ) : key === "Service B" ? (
              <>
                <Green name={"Liberty"} />
                <Red name={"SIT-01"} />
                <Green name={"SIT-02"} />
                <Red name={"SIT-03"} />
              </>
            ) : key === "Service C" ? (
              <>
                <Red name={"Liberty"} />
                <Green name={"SIT-01"} />
              </>
            ) : key === "Service D" ? (
              <>
                <Green name={"Liberty"} />
                <Green name={"SIT-01"} />
                <Yellow name={"SIT-02"} />
                <Green name={"SIT-03"} />
              </>
            ) : key === "Service E" ? (
              <>
                <Red name={"Liberty"} />
                <Red name={"SIT-01"} />
              </>
            ) : null}
            <text className="text"></text>
          </div>
          <div className="healthBox">
            <text className="text">{data?.health}</text>
          </div>
          <div className="descriptionBox">
            <text className="text">
              {key === "Service A"
                ? "http://service-A-03.example.com"
                : key === "Service B"
                ? "http://service-B-1iberty.example.com"
                : key === "Service C"
                ? "http://service-C-03.example.com"
                : key === "Service D"
                ? "http://service-D-02.example.com"
                : key === "Service E"
                ? "http://service-E-01.example.com"
                : null}
            </text>
          </div>
          <div className="durationBox">
            <text className="text">
              {key === "Service A"
                ? "00:00:26:8989888"
                : key === "Service B"
                ? "00:45:56:8977867"
                : key === "Service C"
                ? "02:00:26:7879676"
                : key === "Service D"
                ? `12:00:26:2342434`
                : key === "Service E"
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
