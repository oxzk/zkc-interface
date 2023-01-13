import NavBar from "./components/NavBar/NavBar";
import { Container } from "@mui/material";
import * as React from "react";
import { Outlet } from "react-router-dom";

import { PageType } from "./components/PageType";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: PageType.Advertise,
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>

        <Container sx={{ py: 6 }}>
          <Outlet></Outlet>
        </Container>
      </div>
    );
  }
}

export default App;
