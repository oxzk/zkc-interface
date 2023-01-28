import { Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import BannerStepper from "./BannerStepper";

const LeftPage = () => {
  const navigate = useNavigate();
  return (
    <Card
      elevation={0}
      sx={{
        ml: "48px",
        bgcolor: "#ede7f6",
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
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/explore")
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

const RightPage = () => {
  return <BannerStepper></BannerStepper>;
};

const Advertise = () => {
  return (
    <Container sx={{ py: 12 }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{
          height: "728px",
          bgcolor: "#ede7f6",
          borderRadius: 2,
          maxWidth: "xl",
        }}
      >
        <Grid item xs={8}>
          <LeftPage> </LeftPage>
        </Grid>
        <Grid item xs={4}>
          <RightPage></RightPage>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Advertise;
