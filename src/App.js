import NavBar from "./components/NavBar/NavBar";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/system";
import { Toolbar } from "@mui/material";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Stack direction="column">
          <NavBar></NavBar>
          <Toolbar></Toolbar>
          <Outlet></Outlet>
        </Stack>
      </div>
    );
  }
}

export default App;