import NavBar from "./components/NavBar/NavBar";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/system";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Stack direction="column">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </Stack>
      </div>
    );
  }
}

export default App;