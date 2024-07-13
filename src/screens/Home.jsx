import React, { useEffect, useState } from "react";
import InfoTab from "../components/infoTab";
import "../styles/homeStyles.css";
import getData from "../calls/getData";
import data from "../data/data.js"

function Home() {
  

  console.log(data)

  return (
    <div className="homestyle">
      <div className="toptextbox">
        <text className="textHeadingHome">Health Check Status</text>
        <div className="leftpartheading">
          <text className="texthome">Polling Interval : 10 secs</text>
          <div className="pollingflag">
            <text className="stoppolling">Stop polling</text>
          </div>
        </div>
      </div>
      <InfoTab data={data[0]} index={0} />
      <InfoTab data={data[1]} index={1}  />
      <InfoTab data={data[2]} index={2}  />
      <InfoTab data={data[3]} index={3}  />
      <InfoTab data={data[4]} index={4}  />
    </div>
  );
}

export default Home;
