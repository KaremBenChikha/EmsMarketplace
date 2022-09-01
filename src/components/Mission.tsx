import React, { useContext, useState, useEffect, Component } from "react";
import ROSLIB from "roslib";
import { useROS, ROS } from "react-ros";

import {
  Button,
  TextField,
  Stack,
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
  ListItemAvatar,
  Container,
  CardHeader,
  CardContent,
  Select,
  MenuItem
} from '@mui/material';

export default function Mission() {
  const { createListener, topics, ros, isConnected, url } = useROS();

  function station1() {
    var station1 = (document.getElementById("station1") as HTMLInputElement).value;
    return station1;
  }

  function station2() {
    var station2 = (document.getElementById("station2") as HTMLInputElement).value;
    return station2;
  }

  function station3() {
    var station3 = (document.getElementById("station3") as HTMLInputElement).value;
    return station3;
  }

  function station4() {
    var station4 = (document.getElementById("station4") as HTMLInputElement).value;
    return station4;
  }

  function station5() {
    var station5 = (document.getElementById("station5") as HTMLInputElement).value;
    return station5;
  }

  function missionn() {
    var mission =
      station1() + " 0 0 0/" + station2() + " 0 0 0/" + station3() + " 0 0 0/"; //+station4()+' 0 0 0/'+station5()+' 0 0 0/';

    var missA = new ROSLIB.Topic({
      ros: ros,
      name: "/mission",
      messageType: "std_msgs/String",
    });

    var s = new ROSLIB.Message({
      data: mission,
    });
    missA.publish(s);
  }

  function abort() {
    var value = 4;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: "/panel_msgs",
      messageType: "std_msgs/Int32",
    });

    var s = new ROSLIB.Message({
      data: value,
    });
    abo.publish(s);
  }

  function missionNameload() {
    var value = (document.getElementById("loadMission") as HTMLInputElement).value;
    return value;
  }

  function load() {
    var fileName = new ROSLIB.Param({
      ros: ros,
      name: "/move_base/NavGraph_Global_Planner/files_name",
    });

    fileName.set(missionNameload());
    console.log("file_name", missionNameload());

    var value = 2;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: "/panel_msgs",
      messageType: "std_msgs/Int32",
    });

    var s = new ROSLIB.Message({
      data: value,
    });
    abo.publish(s);
    console.log("Mission loaded !");
  }

  function missionName() {
    var value = (document.getElementById("saveMission") as HTMLInputElement).value;
    return value;
  }


  function save() {
    var value = 1;

    var fileName = new ROSLIB.Param({
      ros: ros,
      name: "/move_base/NavGraph_Global_Planner/files_name",
    });

    fileName.set(missionName());
    console.log("file_name", missionName());

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: "/panel_msgs",
      messageType: "std_msgs/Int32",
    });

    var s = new ROSLIB.Message({
      data: value,
    });
    abo.publish(s);
    console.log("Mission Saved !");
  }

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }} />
   
          {/* <Typography sx={{ pb: 3 }} variant="h2">
            Mission Panel
          </Typography>
 */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField size="small" id="station1" placeholder="add station" />
            <Button
              size="small" variant="outlined" type="button" onClick={() => station1()} id="btn1">
              add
            </Button>

            <TextField size="small" id="station2" placeholder="add station" />
            <Button
              size="small" variant="outlined" type="button" onClick={() => station2()} id="btn2">
              add
            </Button>

            <TextField size="small" id="station3" placeholder="add station" />
            <Button
              size="small" variant="outlined" type="button" onClick={() => station3()} id="btn3">
              add
            </Button>
          </Stack>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pb: 3 }} />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained" onClick={() => missionn()} id="btn4">
              publish mission
            </Button>
            <Button
              variant="contained" onClick={abort} id="btn5">
              abort mission
            </Button>
          </Stack>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pb: 3 }} />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField size="small" id="saveMission" placeholder="Mission Name" />
            <Button
              size="small" variant="outlined" onClick={() => save()} id="btn14">
              Save
            </Button>

            <TextField size="small" id="loadMission" placeholder="Mission Name" />
            <Button
              size="small" variant="outlined" onClick={() => load()} id="btn13">
              Load
            </Button>
          </Stack>
    </div>
  );
}
