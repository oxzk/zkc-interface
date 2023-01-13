import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

import { styled, alpha } from "@mui/material/styles"

import HomeWorkIcon from '@mui/icons-material/HomeWork';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
      <IconButton onClick = {() => {navigate("/")}}><HomeWorkIcon></HomeWorkIcon>zkCredential</IconButton>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search web3 …"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Link href="explore-nft" underline="none" variant="button" mr={2} ml={4}>Exlore </Link>
      <Link href="create-collection" underline="none" variant="button">Create</Link>

      <Box sx={{ flexGrow: 1 }} />
      <Button
        variant="contained"
        sx={{
          borderRadius: 3,
          backgroundColor: "black",
        }}
        onClick = {() => {navigate("/")}}
      >
        Connect Wallet
      </Button>
    </Toolbar>
  );
};

export default NavBar;