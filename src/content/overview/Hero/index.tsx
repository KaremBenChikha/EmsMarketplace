import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.1.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Hydrogen Research Institute Dashboard
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h3"
            color="text.secondary"
            fontWeight="normal"
          >
            Web interface for operational management of a fleet of AGVs
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/dashboards/Agv"
            size="large"
            variant="contained"
          >
            Start the experience
          </Button>
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img src="/static/images/logo/IRH.png" />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}><b>Hydrogen Research Institute</b></Box><Typography component="span" variant="subtitle2"> - The Hydrogen Research Institute (HRI) of the Université du Québec à Trois-Rivières (UQTR) was established in 1994 and is one of Canada’s leading institutes dedication to hydrogen.</Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <TsAvatar>
                <img src="/static/images/logo/UQTR.png" />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}><b> The Université du Québec à Trois-Rivières </b></Box><Typography component="span" variant="subtitle2"> -  also known as "l'université du peuple", established in 1969 and mainly located in Trois-Rivières, Quebec, Canada, is a public university within the Université du Québec network.</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
