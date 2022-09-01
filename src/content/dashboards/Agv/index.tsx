import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '../../../components/Footer';
import { useROS, ROS } from "react-ros";
import ToggleConnect from "../../../components/ToggleConnect";
// import ROSStreamingChart from "/home/yasmine/tokyo-free-white-react-admin-dashboard/src/components/RosStreaming";

import Ems from "../../../components/ems";

function DashboardAgv() {
  return (
    <>

      <Helmet>
        <title>IRH Dashboard</title>
      </Helmet>


      <Container maxWidth="lg">

       <div style={{ top: '70', bottom: '10', left: '200', right: '10', position: 'absolute' }}> 
          <ROS>
            <ToggleConnect />
          </ROS>
         
         {/* <ROSStreamingChart/> */}
         {/* <Ems/> */}
         
        </div>
      </Container>
     
    </>
  );
}

export default DashboardAgv;
