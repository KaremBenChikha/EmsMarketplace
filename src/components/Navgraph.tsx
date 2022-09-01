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
export default function Navgraph() {
  const { createListener, topics, ros, isConnected, url } = useROS();

  function deleteP() {
    var value = 5;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: '/panel_msgs',
      messageType: 'std_msgs/Int32'
    });

    var s = new ROSLIB.Message({
      data: value
    });
    abo.publish(s);
  };

  function deleteA() {
    var value = 6;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: '/panel_msgs',
      messageType: 'std_msgs/Int32'
    });

    var s = new ROSLIB.Message({
      data: value
    });
    abo.publish(s);
  };

  function addw() {
    var value = 17;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: '/panel_msgs',
      messageType: 'std_msgs/Int32'
    });

    var s = new ROSLIB.Message({
      data: value
    });
    abo.publish(s);
  };


  function adds() {
    var value = 18;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: '/panel_msgs',
      messageType: 'std_msgs/Int32'
    });

    var s = new ROSLIB.Message({
      data: value
    });
    abo.publish(s);
  };

  function lineL() {
    var value = 21;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: '/panel_msgs',
      messageType: 'std_msgs/Int32'
    });

    var s = new ROSLIB.Message({
      data: value
    });
    abo.publish(s);
  };

  function graphL() {
    var value = 20;

    var abo = new ROSLIB.Topic({
      ros: ros,
      name: '/panel_msgs',
      messageType: 'std_msgs/Int32'
    });

    var s = new ROSLIB.Message({
      data: value
    });
    abo.publish(s);
  };
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }} />
     
          {/* <Typography sx={{ pb: 3 }} variant="h2">
            Navgraph Solution Panel
          </Typography>
 */}

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained" onClick={deleteP} id="btn7">Delete Points</Button>
            <Button
              variant="contained" onClick={deleteA} id="btn8">Delete Adjacencies</Button>
            <Button
              variant="contained" onClick={addw} id="btn9">Add waypoint</Button>
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
              variant="contained" onClick={adds} id="btn10">Add Station</Button>
            <Button
              variant="contained" onClick={lineL} id="btn11">Line Linking</Button>
            <Button
              variant="contained" onClick={graphL} id="btn12">Graph Linking</Button>
          </Stack>
       
    </div >
  );
}