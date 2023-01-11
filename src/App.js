import AdvertisePage from "./components/AdvertisePage/AdvertisePage";
import NavBar from "./components/NavBar/NavBar";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
        <br/>
        <br/>
        <br/>

      <Box sx={{
         flexGrow: 1,
      }}>
     
        <AdvertisePage></AdvertisePage>

      </Box>
      
    </div>
  );
}

export default App;
