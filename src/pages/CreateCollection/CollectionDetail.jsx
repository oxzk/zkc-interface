import {
  AppBar,
  Box,
  Grid,
  Card,
  Stack,
  CardMedia,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Toolbar,
  InputBase,
  Divider,
  Drawer,
  Paper,
} from "@mui/material";

import "@fontsource/roboto/500.css";

import { useLocation } from "react-router-dom";

import VerifiedIcon from "@mui/icons-material/Verified";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { NFTCard } from "../../components/NFT/NFTCard";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Description = () => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          maxWidth: "50%",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="subtitle1" gutterBottom>
            Take the red bean to join the garden. View the collection at &nbsp;{" "}
            <a href="https://azuki.com/gallery">azuki.com/gallery</a>. ...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Azuki starts with a collection of 10,000 avatars that give you
            membership access to The Garden: a corner of the internet where
            artists, builders, and web3 enthusiasts meet to create a
            decentralized future. Azuki holders receive access to exclusive
            drops, experiences, and more. Visit &nbsp;{" "}
            <a href="https://azuki.com">azuki.com</a>. for more details.We rise
            together. We build together. We grow together.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

const Summary = () => {
  const Item = ({ name, value }) => {
    return (
      <>
        <Typography variant="body2" gutterBottom>
          {name}:{" "}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {value}
        </Typography>
      </>
    );
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Item name="Items" value="10000"></Item>
        <Item name="Creator" value="WXY"></Item>
        <Item name="Creator Earning" value="5%"></Item>
        <Item name="Chain" value="Goerli"></Item>
        <Item name="Type" value="PFP"></Item>
      </Stack>
    </>
  );
};

const NFTGallery = (props) => {
  const length = 25;

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="relative"
        color="transparent"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by name or attribute"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
      </Drawer>

      <Grid container rowSpacing={2} columnSpacing={2} py={2} columns={15}>
        {[...Array(length).keys()].map((i) => (
          <Grid display="flex" item>
            <NFTCard key={i}></NFTCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const CollectionDetail = () => {
  const location = useLocation();
  const bannerImge =
    "https://i.seadn.io/gae/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A?auto=format&w=3840";

  return (
    <Box sx={{ py: 10 }}>
      {/* {alert("hello" + location.state.name)} */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              maxHeight: 350,
            }}
          >
            <CardMedia
              component="img"
              height={350}
              image={bannerImge}
              title="Azuki banner"
            ></CardMedia>
          </Card>
        </Grid>
        <Box
          sx={{
            padding: 5,
          }}
        >
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="h4">Azuki</Typography>

              <VerifiedIcon color="primary"></VerifiedIcon>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="body1">Creator</Typography>

              <Typography variant="h6">Wang Xiaoyi</Typography>

              <VerifiedIcon color="primary" fontSize="small"></VerifiedIcon>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Summary></Summary>
          </Grid>

          <Grid item xs={12}>
            <Description></Description>
          </Grid>

          <Grid item xs={12}>
            <NFTGallery></NFTGallery>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
