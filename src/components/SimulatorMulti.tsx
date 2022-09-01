import React, { useContext, useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";

import {
  Viewer,
  Grid,
  UrdfClient,
  COLLADA_LOADER_2,
  OccupancyGridClient,
  LaserScan,
  InteractiveMarkerClient,
  Path,
  PoseArray,
} from "ros3d";
import { useROS, ROS } from "react-ros";
import ROSLIB from "roslib";
import Mission from "./Mission";
import Navgraph from "./Navgraph";
import ProhibitedZones from "./ProhibitedZones";
export default function SimulatorMulti() {
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
      height: 400,
      antialias: true,
      displayPanAndZoomFrame: false,
      cameraPose: {
        x: 3,
        y: 3,
        z: 70,
      },
    });
    vw.directionalLight.position.y = 10;

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


    const globalPath1 = new Path({
      ros: ros,
      topic: "/robot1/move_base/TebLocalPlannerROS/global_plan",
      tfclient: tfClient,
      rootObject: vw.scene,
    });

    const localPath1 = new PoseArray({
      ros: ros,
      topic: "/robot1/move_base/TebLocalPlannerROS/teb_poses",
      tfclient: tfClient,
      rootObject: vw.scene,
    });
   
     const scanclient1 = new LaserScan({
      ros: ros,
      topic: "/robot1/scan_avant",
      tfClient: tfClient,
      rootObject: vw.scene,
      material: { size: 0.1, color: 0xff00ff },
    });

    const scanclient2 = new LaserScan({
      ros: ros,
      topic: "/robot2/scan_avant",
      tfClient: tfClient,
      rootObject: vw.scene,
      material: { size: 0.1, color: 0xff00ff },
    });

    const scanclient3 = new LaserScan({
      ros: ros,
      topic: "/robot1/scan_arriere",
      tfClient: tfClient,
      rootObject: vw.scene,
      material: { size: 0.1, color: 0xff00ff },
    });

    const scanclient4 = new LaserScan({
      ros: ros,
      topic: "/robot2/scan_arriere",
      tfClient: tfClient,
      rootObject: vw.scene,
      material: { size: 0.1, color: 0xff00ff },
    });
 


    const urdfClient1 = new UrdfClient({
      ros: ros,
      param: "/robot1/robot_state_publisher/robot_description",
      tfClient: tfClient,
      tfPrefix : "robot1",
      //path: '/home/yasmine/DASH/dist';
      rootObject: vw.scene,
      loader: COLLADA_LOADER_2,
    });

    const urdfClient2 = new UrdfClient({
        ros: ros,
        param: "/robot2/robot_state_publisher/robot_description",
        tfClient: tfClient,
        tfPrefix : "robot2",
        //path: '/home/yasmine/DASH/dist';
        rootObject: vw.scene,
        loader: COLLADA_LOADER_2,
      });
    //console.log("urdf1 : ", urdfClient);

    setViewer(vw);

    return (): void => {
      console.log("stopping");
      vw.stop();
    };
  }, [isConnected]);

  return (
    <div>
      <div id="urdf" />
    </div>
  );
}
