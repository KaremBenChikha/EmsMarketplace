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
import MainOutput from "./mainoutput";
import './app.css';

import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  Stack,
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
import { style } from '@mui/system';
import { styled } from '@mui/material/styles';

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {

  "MAINOUTPUT": <MainOutput />,
  "3D NAVIGATION": <SimulatorProMax />,
};
const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(40)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;

`
);

export default function ToggleConnect() {
  const { isConnected, url, changeUrl, topics, toggleConnection, toggleAutoconnect } = useROS();

  const defaultURL = "ws://localhost:9090";


  return (
    <div >
      <></>
      {!isConnected ?
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 30 }} />
        : null}
      {!isConnected ?
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
        >



          <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>

            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
              <Grid spacing={{ xs: 12, md: 10 }} justifyContent="center" alignItems="center" container>
                <Grid item md={12} lg={12} mx="auto">

                  <TypographyH1 sx={{ mb: 2 }} variant="h1">
                    CONNECT TO YOUR ROBOT !
                  </TypographyH1>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ pb: 3 }} />
                    
                  <Button onClick={() => { toggleConnection(); console.log(url) }} variant="contained">Toggle Connect</Button> <br />

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ pb: 3 }} />

                  <TypographyH2> Enter your robot IP adress : </TypographyH2>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ pb: 3 }} />
                  <TextField
                    required
                    name="urlInput"
                    id="ipAdresse"
                    label="Required"
                    onChange={(event => changeUrl(event.target.value))}
                  //defaultValue={url} "ws://172.16.65.179/9090"
                  />

                </Grid>
              </Grid>
            </Container>
          </Card>


          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pb: 3 }} />

          {/*        <Grid item lg={3} xs={12}>

          {isConnected ? (<ListTopic />) : null}
        </Grid>
        <Grid item lg={9} xs={12}>
          {isConnected ? (<SimulatorProMax />) : null}
        </Grid> */}

        </Grid>
        : null}
      {isConnected ?
        <div id="app">
          <Mosaic<string>
            className="mosaic-blueprint-theme mosaic mosaic-drop-target"
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

              direction: "row",
              first: "3D NAVIGATION",
              second: "MAINOUTPUT"
            }
            }
            resize={{
              minimumPaneSizePercentage: 0
            }}
          />
        </div>
        : null}
    </div>
  );
}
