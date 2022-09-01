import React, { useState } from "react";
import { useROS } from "react-ros";
//import EchoService from "./echoService";
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
  ListItemAvatar,
  Container,
  CardHeader,
  CardContent,
  Select,
  Stack,
  MenuItem
} from '@mui/material';

export default function ListService() {
  const { services , ros } = useROS();
  const [tableau, setTableau] = useState([]);
  const [serviceInput, setServiceInput] = useState("");
  function Liste() {
    setTableau(services);
    tableau.sort(services.path);
  }

  function Effacer() {
    setTableau([]);
  }

  const listItems = tableau.map((service) => (
    <li key={service.path}> {service.path} </li>
  ));

  const serviceToShow = (e) => {
    setServiceInput(e.target.value);

  }

  return (

    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >

          <Button  onClick= {() => {Liste(); tableau.sort(services.path);}} variant="contained"> Générer </Button>

          <Select
            style={{maxWidth : 150}}
            size="small"
            onChange={serviceToShow}
            label="service">

            <MenuItem value="0">--Select service--</MenuItem>
            {tableau.map((service) => (
              <MenuItem key={service.path} value={service.path}>
                {" "}
                {service.path}
              </MenuItem>
            ))}
          </Select>

        </Stack>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 3 }} />

        {/* <EchoService serviceInput={serviceInput} /> */}
        </div>

  );
}
