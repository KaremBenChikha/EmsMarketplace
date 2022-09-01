import React, { useContext, useState, useEffect, Component } from "react";
import ROSLIB from "roslib";
import { useROS, ROS } from "react-ros";

import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  CardContent, Stack, TextField
} from '@mui/material';


export default function ProhibitedZones() {
  const { createListener, topics, ros, isConnected, url } = useROS();

  function addZone() {
    var value = 10;

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

  function editZone() {
    var value = 14;

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

  function deleteAll() {
    var value = 13;

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

  function applyModifications() {
    var value = 11;

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

  function zoneName() {
    var value = (document.getElementById("saveZone") as HTMLInputElement).value;
    return value;
  }

  function saveZone() {
    var value = 20;

    var fileName = new ROSLIB.Param({
      ros: ros,
      name: "/high_level_planner/prohibition_file",
    });

    fileName.set(zoneName());
    console.log("file_name", zoneName());

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: "/panel_msgs",
      messageType: "std_msgs/Int32",
    });

    var s = new ROSLIB.Message({
      data: value,
    });
    abo.publish(s);
    console.log("Zone Saved !");
  }

  function zoneNameload() {
    var value = (document.getElementById("loadZone") as HTMLInputElement).value;
    return value;
  }

  function loadZone() {
    var fileName = new ROSLIB.Param({
      ros: ros,
      name: "/high_level_planner/prohibition_file",
    });

    fileName.set(zoneNameload());
    // console.log('file_name', zoneNameload());

    var value = 21;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: "/panel_msgs",
      messageType: "std_msgs/Int32",
    });

    var s = new ROSLIB.Message({
      data: value,
    });
    abo.publish(s);
    console.log("zone loaded !");
  }

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }} />

         {/*  <Typography sx={{ pb: 3 }} variant="h2">
            Prohibited Zones Panel
          </Typography>
 */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained" onClick={addZone} id="btn22">
              Add Zone
            </Button>
            <Button
              variant="contained" onClick={editZone} id="btn23">
              Edit Zone
            </Button>


            <Button
              variant="contained" onClick={deleteAll} id="btn19">
              Delete All
            </Button>

            <Button
              variant="contained" onClick={applyModifications} id="btn19">
              Apply Modifications
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
            <TextField size="small" id="saveZone" placeholder="Zone name" />
            <Button
              variant="contained" onClick={saveZone} id="btn20">
              Save Zone
            </Button>
            <TextField size="small" id="loadZone" placeholder="Zone name" />
            <Button
              variant="contained" onClick={loadZone} id="btn21">
              Load Zone{" "}
            </Button>
          </Stack>
    </div>
  );
}
