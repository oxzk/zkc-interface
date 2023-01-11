import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import * as React from "react";

const LeftPage = () => {
  return (
    <Card
      sx={{
        ml: "48px",
        // height: "480px",
        bgcolor: "",
        alignContent: "center",
      }}
    >
      <CardContent>
        <Typography variant="h3" gutterBottom>
          0% Fees
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Buy aggreated NFTs from 5 blockchains. Lock your XX -- <br />
          unlock 0% fees.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" bgcolor="black">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

const RightPage = () => {
  return (
    <Paper
      sx={{
        bgcolor: "primary.main",
        mr: "48px",
        height: "100%",
      }}
    >
      SSS
    </Paper>
  );
};

const AdvertisePage = () => {
  return (
    <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        //   spacing={2}
          sx= {{
            height: "512px",
            bgcolor: "#ede7f6",
            borderRadius: 2,
          }}
        >
          <Grid item xs={8} >
            <LeftPage> </LeftPage>
          </Grid>
          <Grid item xs={4}>
            <RightPage></RightPage>
          </Grid>
        </Grid>
      
    </Container>
  );
};

export default AdvertisePage;
