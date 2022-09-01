import React, { useContext, useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";

import { Mosaic, MosaicWindow } from 'react-mosaic-component';

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import './app.css';
import Demo from "./demo"
import {
  Viewer,
  Grid,
  UrdfClient,
  OccupancyGridClient,
  LaserScan,
  InteractiveMarkerClient,
  Path,
  PoseArray,
} from "ros3d";

import {
  Button,
  Card,
  Box,
  Typography,
  Hidden,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Container,
  CardHeader,
  CardContent,
  Stack,
  Select,
  MenuItem
} from '@mui/material';

import { useROS, ROS } from "react-ros";
import ROSLIB from "roslib";
import Mission from "./Mission";
import Navgraph from "./Navgraph";
import ProhibitedZones from "./ProhibitedZones";
import { Tune } from "@mui/icons-material";
import Missions from "./missions";


export default function Mover(props) {
  const { createListener, topics, ros, isConnected, url } = useROS();

  const [viewer, setViewer] = useState<Viewer | undefined>(undefined);

  console.log("ROS ", ros);



  function mover(
    linearX,
    linearY,
    linearZ,
    angularX,
    angularY,
    angularZ,

  ) {
    var cmdVel = new ROSLIB.Topic({
      ros: ros,
      name: "/output/cmd_vel",
      messageType: "geometry_msgs/Twist",
    });

    var twist = new ROSLIB.Message({
      linear: {
        x: linearX,
        y: linearY,
        z: linearZ,
      },
      angular: {
        x: angularX,
        y: angularY,
        z: angularZ,
      },
    });

    cmdVel.publish(twist);
  }

  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="contained"
            id="forward"
            onMouseUp={() => {
              mover(0.9, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
            onMouseDown={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
          >
            Forward
          </Button>
        </Stack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 2 }} />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="contained"
            id="right"
            onMouseUp={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, -0.9);
            }}
            onMouseDown={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
          >
            Right
          </Button>
          <Button
            variant="contained"
            id="Stop"
            onClick={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            id="left"
            onMouseUp={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, 0.9);
            }}
            onMouseDown={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
          >
            Left
          </Button >

        </Stack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 2 }} />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="contained"
            id="backward"
            onMouseUp={() => {
              mover(-0.9, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
            onMouseDown={() => {
              mover(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
            }}
          >
            Backward
          </Button >
        </Stack>
      </Stack>
    </div>
  );
}
