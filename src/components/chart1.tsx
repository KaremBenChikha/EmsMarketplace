import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useROS, ROS } from "react-ros";


import { Chart , registerables , CategoryScale} from "chart.js";
import { Line } from "react-chartjs-2";
//import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
//var createReactClass = require("create-react-class");

//Chart.register(StreamingPlugin);



export default function ChartShow (props) {

const [var1,setVar1]=useState("");

useEffect(() => {
  setVar1(props.output);
  });
  return (
    <div>
       <div style = {{width: 500, height:250}}>
        <Line
        data={{
          datasets: [{
            label: 'Dataset 1',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            borderDash: [8, 4],
            fill: true,
            data: []
          }]
        }}
        options={{
          scales: {
            x: {
              type: 'realtime',
              realtime: {
                delay: 20,
                onRefresh: chart => {
                  chart.data.datasets.forEach(dataset => {
                    dataset.data.push({
                      x: Date.now(),
                      y: Number(var1)
                    });
                  });
                }
              }
            }
          }
        }}
      /> 
      </div>
    </div>
  );
}
