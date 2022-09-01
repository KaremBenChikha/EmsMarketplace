import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useROS, ROS } from "react-ros";
//import ChartShow from "./chart1";
import ROSLIB from "roslib";
//import { MenuItem } from '../layouts/SidebarLayout/Sidebar/SidebarMenu/items';

import {
  Button,
  Select, MenuItem, InputLabel, Stack, Box
} from '@mui/material';

import PartieMsg from "./partMsg";

var listener = null;
//var variable = "";
//var bool = false;
export default function EchoTopic(props) {
  const { createListener, topics, ros } = useROS();
  const [topic, setTopic] = useState("/");
  const [topicInput, setTopicInput] = useState("/");
  const [queue, setQueue] = useState(0);
  const [compression, setCompression] = useState("none");
  const [tableau, setTablau] = useState([]);
  const [chart, setChart] = useState([]);
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(0);
  const [topicEntier, setTopicEntier] = useState(false);
  const [update, setUpdate] = useState(false);
  const [variable, setVariable] = useState("");
  const [Message, setMessage] = useState([]);
  //var Message = [];
  const [bool, setBool] = useState(false);
  const [msgType, setMsgType] = useState("");

  const [someImageURL, setSomeImageURL] = useState('');

  useEffect(() => {
    setTopicInput(props.topicInput);
    handleTopic();
  });



  const unsubscribe = () => {
    if (listener) {
      console.log("Unsubscribing");
      listener.unsubscribe();
    }
  };
  const handleTopic = () => {
    if (topic !== topicInput) {
      setTopic(topicInput);
      unsubscribe();
      return;
    }
    unsubscribe();
    listener = null;
    for (var i in topics) {
      if (topics[i].path == topicInput) {
        listener = createListener(
          topics[i].path,
          topics[i].msgType,
          Number(queue),
          compression
        );

        setMsgType(topics[i].msgType);
        break;
      }
    }

    if (listener) {
      console.log("Subscribing to messages...");
      listener.subscribe(handleMsg);
    } else {
      console.log(
        "Topic '" +
        topic +
        "' not found...make sure to input the full topic path - including the leading '/'"
      );
    }
  };

  const handleMsg = (msg) => {
    setMessage(msg);
    setSomeImageURL("data:image/jpeg;base64," + msg.data)
  };

  const AfficheMsg = () => {
    var msg = Message;
    var objet1 = [];
    objet1 = Object.keys(msg);
    var table = [];
    var graphe = [];
    if (objet1.length > 1) {
      for (var i = 0; i < objet1.length; i++) {
        table.push("------------------");
        table.push(String(objet1[i]) + " :");
        var objet2 = [];
        objet2 = Object.keys(msg[objet1[i]]);
        if (objet2.length > 0) {
          for (var j = 0; j < objet2.length; j++) {
            table.push(" -- " + String(objet2[j]) + " :");
            var objet3 = [];
            objet3 = Object.keys(msg[objet1[i]][objet2[j]]);
            if (objet3.length > 0) {
              for (var k = 0; k < objet3.length; k++) {
                table.push(" --- " + String(objet3[k]) + " :");
                var objet4 = [];
                objet4 = Object.keys(msg[objet1[i]][objet2[j]][objet3[k]]);
                if (objet4.length > 0) {
                  for (var l = 0; l < objet4.length; l++) {
                    table.push(" ---- " + String(objet4[l]) + " :");
                    table.push(
                      String(
                        "====> " +
                        msg[objet1[i]][objet2[j]][objet3[k]][objet4[l]]
                      )
                    );
                    graphe.push(
                      objet1[i] +
                      " " +
                      objet2[j] +
                      " " +
                      objet3[k] +
                      " " +
                      objet4[l]
                    );
                  }
                } else {
                  table.push(
                    String("====> " + msg[objet1[i]][objet2[j]][objet3[k]])
                  );
                  graphe.push(objet1[i] + " " + objet2[j] + " " + objet3[k]);
                }
              }
            } else {
              table.push(String("====> " + msg[objet1[i]][objet2[j]]));
              graphe.push(objet1[i] + " " + objet2[j]);
            }
          }
        } else {
          table.push(String("====> " + msg[objet1[i]]));
          graphe.push(objet1[i]);
        }
      }
    } else {
      for (var i = 0; i < objet1.length; i++) {
        table.push(String(objet1[i]));
        table.push("====> " + String(msg[objet1[i]]));
        graphe.push(objet1[i]);
      }
    }
    setTablau(table);
    setChart(graphe);
  };

  const listItems = tableau.map((topic) => (
    <li
      key={Math.random()
        .toString(36)
        .substr(2, 9)}
    >
      {" "}
      {topic}{" "}
    </li>
  ));

  const PartMsg = () => {
    var inter = bool;
    console.log("bool = ", bool);
    if (inter == true) {
      var myArray = variable.split(" ");
      var msg = Message;
      var partMsg = "";
      console.log("message ", msg);
      console.log(myArray.length);
      console.log("variable ", variable);
      if (myArray.length == 1) {
        partMsg = msg[myArray[0]];
        console.log("1");
      } else {
        if (myArray.length == 2) {
          partMsg = msg[myArray[0]][myArray[1]];
          console.log("2");
        } else {
          if (myArray.length == 3) {
            partMsg = msg[myArray[0]][myArray[1]][myArray[2]];
            console.log("3");
          } else {
            if (myArray.length == 4) {
              partMsg = msg[myArray[0]][myArray[1]][myArray[2]][myArray[3]];
              console.log("4");
            };
          };
        };
      };
      setOutput(partMsg);
      console.log("output : ", output);
      var i = count + 1;
    };
    setCount(i);
    console.log("******************** ", count, " *********************");
  };

  const PartMsgOK = (e) => {
    setVariable(e.target.value);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
         // size="small"
          variant="contained"
          onClick={() => {
            AfficheMsg();
            setTopicEntier(true);
            setBool(false);
            setUpdate(false);
          }
          }
        >
          {" "}
          Afficher topic séléctionné{" "}
        </Button>

        {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }} /> */}

        <Button
          //size="small"
          variant="contained"
          onClick={() => {
            AfficheMsg();
            setTopicEntier(false);
            setUpdate(true);
            setBool(false);
          }}
        >
          {" "}
          Sélectionné partie de topic à afficher{" "}
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
        <Select size="small" autoWidth onChange={PartMsgOK}>
          <InputLabel htmlFor="demo-controlled-open-select">--Select partie de topic à afficher--</InputLabel>
          {chart.map((valeur) => (
            <MenuItem key={valeur} value={valeur}>
              {" "}
              {valeur}
            </MenuItem>
          ))}
        </Select>

        {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }} /> */}

        <Button
          //size="small"
          variant="contained"
          onClick={() => {
            setCount(0);
            setBool(true);
            //PartMsg();
          }}
        >
          {" "}
          Afficher partie de topic séléctionné{" "}
        </Button>
      </Stack>

      {/* <div>{output[count - 1]}</div>  */}
      {bool ? <PartieMsg variable={variable} msgType={msgType} message={Message} /> : null}
      {topicEntier ? <ul> {listItems} </ul> : null}
      {msgType == "sensor_msgs/CompressedImage" ? <img src={someImageURL}></img> : null}
    </div>
  );
}
