import React, { useState } from "react";
import { useROS } from "react-ros";
import EchoTopic from "./echoTopic";
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
//import Select from 'react-select';

export default function ListTopic() {
  const { topics, ros } = useROS();
  const [tableau, setTableau] = useState([]);
  const [topicInput, setTopicInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isRtl, setIsRtl] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);

  function Liste() {

    setTableau(topics);


  }

  // function Effacer() {
  //   setTableau([]);
  // }

  const listItems = tableau.map((topic) => (
    <li key={topic.path}> {topic.path} </li>
  ));

  const topicToShow = (e) => {
    setTopicInput(e.target.value);

  }

  return (

    // <Card>
    //   <CardContent>
    //     <Typography sx={{ pb: 3 }} variant="h2">
    //       List des topics:
    //     </Typography>
     <div>
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >

          <Button onClick={() => { Liste(); }} variant="contained"> Générer </Button>
          {/* <Button size="small" onClick={() => { console.log("tableau = ", tableau); }} variant="contained"> Générer 2</Button> */}

           <Select
            style={{maxWidth : 150}}
            size="small"
            onChange={topicToShow}
            label="topic">

            <MenuItem value="0">--Select topic--</MenuItem>
            {tableau.map((topic) => (
              <MenuItem key={topic.path} value={topic.path}>
                {" "}
                {topic.path}
              </MenuItem>
            ))}
          </Select> 
           {/* <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={tableau[0]}
            isDisabled={isDisabled}
            isLoading= {!isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name={"path"}
            options={tableau}
            onChange={topicToShow}
            value
          />  */}
          
        </Stack>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 3 }} />

        <EchoTopic topicInput={topicInput} />

    </div>
  );
}
