import NavBar from "./components/NavBar/NavBar";
import * as React from "react";
import { Outlet } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Outlet></Outlet>
         
      </div>
    );
  }
}

export default App;
