import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useROS, ROS } from "react-ros";
import ListTopic from "./ListTopics";
import SimulatorProMax from "./SimulatorProMax";
import SimulatorMulti from "./SimulatorMulti";
import ListService from "./ListServices";
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import ROSStreamingChart from "./RosStreaming";
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import Output from "./output";
import './app.css';

import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  Hidden,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar, Container, CardHeader, CardContent
} from '@mui/material';

import TextField from '@mui/material/TextField';
//import ChartShow from "./chart1";


const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {

  "OUTPUT": <Output />,
  "ROSStreamingChart": <ROSStreamingChart /> ,
};


export default function MainOutput() {
 

  return (
    <div >
     
          <Mosaic<string>
            className="mosaic-blueprint-theme mosaic drop-target"
            renderTile={(id, path) => (
              <MosaicWindow<string>
              className="center-col"
                path={path}
                createNode={() => "new"}
                title={id}
              >

                <div style={{ width: "100%", height: "100%" }}>{ELEMENT_MAP[id]}</div>
              </MosaicWindow>
            )}
            initialValue={{

              direction: "column",
              first : "ROSStreamingChart",
              second : "OUTPUT"
            }
            }
            resize={{
              minimumPaneSizePercentage: 0
            }}
          />
     
   
       
    </div>
  );
}
