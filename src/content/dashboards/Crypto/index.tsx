import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '../../../components/Footer';
import { useROS, ROS } from "react-ros";
import ToggleConnect from "../../../components/ToggleConnect";

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import SimulatorProMax from "../../../components/SimulatorProMax";

function DashboardCrypto() {
  return (
    <>

      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Container maxWidth="lg">
        <div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <AccountBalance />
            </Grid>
            <Grid item lg={8} xs={12}>
              <Wallets />
            </Grid>
            <Grid item lg={4} xs={12}>
              <AccountSecurity />
            </Grid>
            <Grid item xs={12}>
              <WatchList />
            </Grid>
          </Grid>
        </div>
        <div>
          <ROS>
            <ToggleConnect />
          </ROS>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
