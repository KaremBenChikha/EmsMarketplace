import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactSpeedometer from "react-d3-speedometer";

import { useROS, ROS } from "react-ros";
import { Helmet } from 'react-helmet-async';

import GaugeChart from 'react-gauge-chart'
import PageTitle from '../components/PageTitle';
import PageTitleWrapper from '../components/PageTitleWrapper';
import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import { display } from "@mui/system";

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


function Ems(props) {

    return (
        <>
            <Helmet>
                <title>Accordions - Components</title>
            </Helmet>
            <PageTitleWrapper>
                <PageTitle
                    heading="ENERGETIC PANEL"
                    subHeading=""
                    docs="https://material-ui.com/components/accordion/" />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="POWER TOOLS" />
                            <Divider />
                            <CardContent>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>AGV</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        <div style={styles.dial}>
                                            <GaugeChart id="V"
                                                nrOfLevels={3}
                                                arcsLength={[0.25, 0.5, 0.25]}
                                                colors={["#2d74da", "#1f57a4", "#25467a"]}
                                                arcPadding={0.02}
                                                percent={0.7}
                                                textColor={"#000000"}
                                                needleColor={"#5392ff"}
                                            //  formatTextValue={"Vitesse linéaire"}                      
                                            />
                                            <ReactSpeedometer
                                                maxValue={0}
                                                minValue={0}
                                                height={190}
                                                width={290}
                                                value={0.5}
                                                //needleTransition="easeQuadIn"
                                                needleTransitionDuration={1000}
                                                needleColor="red"
                                                startColor="green"
                                                segments={10}
                                                endColor="blue"
                                            />
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Disabled Accordion</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Ems;
