import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactSpeedometer from "react-d3-speedometer";

import { useROS, ROS } from "react-ros";
import { Helmet } from 'react-helmet-async';

import GaugeChart from 'react-gauge-chart'
import PageTitle from './PageTitle';
import PageTitleWrapper from './PageTitleWrapper';
import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from './Footer';
import { display } from "@mui/system";
import ListTopic from "./ListTopics";
import ListService from "./ListServices";
const styles = {
    dial: {
        display: "inline-block",
        width: `300px`,
        height: `auto`,
        color: "#000",
        border: "0.5px solid #fff",
        padding: "2px"
    },
    title: {
        fontSize: "1em",
        color: "#000"
    }
};


function Output(props) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Helmet>
                <title>Accordions - Components</title>
            </Helmet>

          {/*   <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Card>

                            <Divider /> */}
                            <div>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Topics List</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ListTopic />
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Services List</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ListService />
                                    </AccordionDetails>
                                </Accordion>


                            </div>
                        {/* </Card>
                    </Grid>
                </Grid>
            </Container> */}

        </>
    );
}

export default Output;
