import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";

const NFTCollection = () => {
  const navigate = useNavigate();

  return (
    <Card x={{ maxWidth: 384 }}>
      <CardActionArea onClick = {()=> {
         navigate("/collection/detail"); // TODO: add parameters
      }}>
        <CardMedia
          component="img"
          height="215px"
          image="https://i.seadn.io/gcs/files/2754ce09410ac26f95a1c44e2719dc6f.jpg?auto=format&w=3840"
          alt="green iguana"
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        ></CardMedia>

        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://i.seadn.io/gcs/files/a8a2c681f0241bc7128b9ee204a501f2.jpg?auto=format&w=256"
            />
            <Typography variant="h6" gutterBottom>
              Sewer Pass
            </Typography>
            <VerifiedIcon color="primary"></VerifiedIcon>
            <Box sx={{ flexGrow: 1 }} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Collection = () => {
  return (
    // <Container
    //   sx={{
    //     maxWidth: "2560px",
    //   }}
    // >
    <Box
      sx={{
        py: 12,
        ml: 12,
        mr: 12,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Explore Collections
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={2} py={2}>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
        <Grid item xs={3}>
          <NFTCollection></NFTCollection>
        </Grid>
      </Grid>
    </Box>
    // </Container>
  );
};

export default Collection;
