import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useROS, ROS } from "react-ros";


import ChartShow from "./chart1";
import { Outlet } from 'react-router-dom';


export default function PartMsg (props) {

    const [output, setOutput] = useState("");
    const [varia, setVaria]= useState("");
    const [mess, setMess]= useState([]);
    const [messType, setMessType] = useState("");
    const [nav, setNav] = useState(false);
useEffect(() => {
    setVaria(props.variable);
    setMess(props.message);
    setMessType(props.msgType);
    setNav(messType == "nav_msgs/MapMetaData");
    PartMsg();
    console.log("**********************************");
    });

const PartMsg = () => {
   
    var myArray = varia.split(" ");
    var msg = mess;
    var partMsg = "";
    console.log("message ", msg);
    console.log(myArray.length);
   
    if (myArray.length == 1) {
      partMsg = msg[myArray[0]];
      console.log("1");
    } else {
      if (myArray.length == 2) {
        partMsg = msg[myArray[0]][myArray[1]];
        console.log("2");
      } else {
        if (myArray.length == 3) {
          partMsg = msg[myArray[0]][myArray[1]][myArray[2]];
          console.log("3");
        } else {
          if (myArray.length == 4) {
            partMsg = msg[myArray[0]][myArray[1]][myArray[2]][myArray[3]];
            console.log("4");
          }
        }
      }
    }
    setOutput(partMsg);
    console.log("output : ", output);
  };
 // console.log(Array.isArray(messType)); 
 
  return (
    <div>
    <ChartShow output={output} />
    <div> {output} </div> 
    </div>
  );
}

