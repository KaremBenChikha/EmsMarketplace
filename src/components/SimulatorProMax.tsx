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

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  "3D MAP": <InterSimulator />,
   "3D PANELS": <Missions />,

  // "MISSION PANEL": <Mission />,
  // "NAVGRAPH SOLUTION PANEL": <Navgraph />,
  // "PROHIBITED ZONES PANEL": <ProhibitedZones />,
};

export function InterSimulator(props) {
  const { createListener, topics, ros, isConnected, url } = useROS();

  const [viewer, setViewer] = useState<Viewer | undefined>(undefined);

  console.log("ROS ", ros);

  useEffect(() => {
    if (!isConnected) {
      return;
    }
    const vw = new Viewer({
      divID: "urdf",
      width: 700,
      height: 500,
      antialias: true,
      displayPanAndZoomFrame: true,
      cameraPose: {
        x: 3,
        y: 3,
        z: 70,
      },
    });
    vw.directionalLight.position.y = 20;

    vw.addObject(new Grid());

    const tfClient = new ROSLIB.TFClient({
      ros: ros,
      angularThres: 0.01,
      transThres: 0.01,
      rate: 10.0,
      fixedFrame: "map",
    });
    const grid3D = new OccupancyGridClient({
      ros: ros,
      tfClient: tfClient,
      rootObject: vw.scene,
    });

    const scanclient = new LaserScan({
      ros: ros,
      topic: "/scan_multi",
      tfClient: tfClient,
      rootObject: vw.scene,
      material: { size: 0.05, color: 0xff00ff },
    });

    /*     const globalPath = new Path({
          ros: ros,
          topic: "/move_base/TebLocalPlannerROS/local_plan",
          tfclient: tfClient,
          rootObject: vw.scene,
        });
    
        const localPath1 = new PoseArray({
          ros: ros,
          topic: "/move_base/TebLocalPlannerROS/teb_poses",
          tfclient: tfClient,
          rootObject: vw.scene,
        }); */

    const urdfClient = new UrdfClient({
      ros: ros,
      tfClient: tfClient,
      //  path : '/home/yasmine/DASH',
      rootObject: vw.scene,
    });

    // Setup the interactive marker client.
    var imClient = new InteractiveMarkerClient({
      ros: ros,
      tfClient: tfClient,
      //topic : '/basic_controls',
      topic: "/topic_ns",
      camera: vw.camera,
      rootObject: vw.selectableObjects,
    });

    var adClient = new InteractiveMarkerClient({
      ros: ros,
      tfClient: tfClient,
      //topic : '/basic_controls',
      topic: "/connections",
      camera: vw.camera,
      rootObject: vw.selectableObjects,
    });

    var hClient = new InteractiveMarkerClient({
      ros: ros,
      tfClient: tfClient,
      //topic : '/basic_controls',
      topic: "/heads",
      camera: vw.camera,
      rootObject: vw.selectableObjects,
    });

    var pClient = new InteractiveMarkerClient({
      ros: ros,
      tfClient: tfClient,
      //topic : '/basic_controls',
      topic: "/perimeter",
      camera: vw.camera,
      rootObject: vw.selectableObjects,
    });

    var tClient = new InteractiveMarkerClient({
      ros: ros,
      tfClient: tfClient,
      //topic : '/basic_controls',
      topic: "/zoneText",
      camera: vw.camera,
      rootObject: vw.selectableObjects,
    });
    setViewer(vw);

    return (): void => {
      console.log("stopping");
      vw.stop();
    };
  }, [isConnected]);

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
        <Box alignItems="center" id="urdf" />
     
      </Stack>
    </div>
  );
}
export default function SimulatorProMax() {

  return (
    <div>
      <Mosaic<string>
        className="mosaic-blueprint-theme bp3-dark"
        renderTile={(id, path) => (
          <MosaicWindow<string>
            className="center-col"
            path={path}
            createNode={() => "new"}
            title={id}
          >
            <div>{ELEMENT_MAP[id]}</div>
          </MosaicWindow>
        )}
        initialValue={{
          direction: "column",
          first: "3D MAP",
          second : "3D PANELS",
    
        }}
        resize={{
          minimumPaneSizePercentage: 0
        }}
      />
    </div>
  );
}
