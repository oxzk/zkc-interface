import { Container, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export const CollectionDetail = () => {
    const location = useLocation();

  return (
    <Container
      sx={{
        maxWidth: "lg",
      }}
    >
        <Box>
            <h1>,,,,,,, hhhhh</h1>
       {alert("hello" + location.state.name)}
        </Box>
      
    </Container>
  );
};
