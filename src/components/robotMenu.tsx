
//import agv from "../images/agv.jpg";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { height } from "@mui/system";
export default function RobotMenu(props) {
  return (
    <div className="col">
    <div className="card h-100">
      <img src={props.image} className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.robotName}</h5>
         {props.description}
        <a href="#" className="btn btn-primary">
          Choose the {props.robotName} 
        </a>
      </div>
    </div>
    </div>
  );
}
