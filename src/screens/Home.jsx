import React, { useEffect, useState } from "react";
import InfoTab from "../components/infoTab";
import "../styles/homeStyles.css";
import getData from "../calls/getData";
import data from "../data/data.js"



function Home() {
   
  const [datat, setDatat] = useState([]);
  
  const [serviceList, setServiceList] = useState([]);
  useEffect(()=> {
      getData().then((d)=>{
   
      var result = Object.keys(d).map((key) => [key, d[key]]);
     let arr=[...result];
 
        setDatat(arr);
        console.log(datat);
      //  console.log(arr);
      // setServiceList(arr);
      });
//console.log(arr.map((key)=>console.log(key[0])));

  },[]);
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
      
      {
       datat.map((e,index)=><InfoTab data={e[1]} key={index}  val={e[0]}/>)
      }
     
    </div>
  );
}

export default Home;
