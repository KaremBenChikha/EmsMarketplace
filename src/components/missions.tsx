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
import Mission from "./Mission";
import Navgraph from "./Navgraph";
import ProhibitedZones from "./ProhibitedZones";
import Mover from "./mover";
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


function Missions(props) {
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

            {/* <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Card>
                          
                            <Divider />
                            <CardContent> */}
                            <div>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Mission Panel</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Mission />
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Navgraph somution Panel</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <Navgraph />
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Prohibited zones Panel</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ProhibitedZones />
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4a-content"
                                        id="panel4a-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Mover Panel</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <Mover />
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                            {/* </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
             */}
        </>
    );
}

export default Missions;
