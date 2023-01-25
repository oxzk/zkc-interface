import { Container, Typography, Box, CssBaseline } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Upload } from "@web3uikit/core";

const CreateCollection = () => {
  const [blockchain, setBlockchain] = React.useState("Goerli");
  const [ setLogoImage] = React.useState(null);

  const handleChange = (event) => {
    setBlockchain(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // // TODO: post data to the backend server
    // console.log({
    //   name: data.get("name"),
    //   description: data.get("description"),
    //   file: data.get("file").name,
    // });

    alert(data.get("file").name);
  };

  const handleOnchangeFile = (file) => {
    setLogoImage(file);
    alert(file.name);
  };

  return (
    <Container
      sx={{
        maxWidth: "lg",
      }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          py: 24,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Create a Collection
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          LogoImage *
        </Typography>
        <Typography variant="body2" gutterBottom>
          This image will also be used for navigation 350 * 350 recommended.
        </Typography>

        <Box
          sx={{
            width: "250px",
          }}
        >
          <Upload onChange={handleOnchangeFile} id="pic"></Upload>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Featured image
        </Typography>
        <Typography variant="body2" gutterBottom>
          This image will be sused for featuring your collection on the
          homepage. categary pages or other promotional areas of zkCredential
        </Typography>

        <Box
          sx={{
            width: "600px",
          }}
        >
          <Upload descriptionText="600 * 400 recommended" style={{}}></Upload>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Banner image
        </Typography>
        <Typography variant="body2" gutterBottom>
          This image will appear at the top of your collection page. Avoid
          including too much text in the banner image as the dimensions change
          on different devices 1400 * 350 recommended.
        </Typography>

        <Box
          sx={{
            width: "1400px",
          }}
        >
          <Upload descriptionText="1400 * 350 recommended"></Upload>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Name *
        </Typography>

        <TextField
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          sx={{
            width: "50%",
          }}
        />

        <Typography variant="subtitle1" gutterBottom>
          Description
        </Typography>
        <Typography variant="body2" gutterBottom>
          Markdown syntax is supported. 0 of 1000 characters used.
        </Typography>
        <TextField
          id="description"
          name="description"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Collection description ..."
          sx={{
            width: "80%",
          }}
        />

        <Typography variant="subtitle1" gutterBottom>
          Blockchain
        </Typography>
        <Typography variant="body2" gutterBottom>
          Select the blockchain where you'd like new items from this collection
          to be added by default.
        </Typography>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={blockchain}
          label="Blockchain"
          onChange={handleChange}
          sx={{ width: "128px" }}
        >
          <MenuItem>Goerli</MenuItem>
          <MenuItem>Ethereum</MenuItem>
          <MenuItem>Polygon</MenuItem>
        </Select>

        <CssBaseline></CssBaseline>
        <br></br>
        <br></br>
        <Button type="submit" variant="contained">
          Create Collection
        </Button>
      </Box>
    </Container>
  );
};

export default CreateCollection;
