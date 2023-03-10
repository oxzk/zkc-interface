import { Container, Typography, Box, CssBaseline, CircularProgress } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Upload } from "@web3uikit/core";
import { useNavigate } from "react-router-dom";

import { useWeb3Context } from "../../hooks/useWeb3Context";
import { ethers} from "ethers";

const CreateCollection = () => {
  const navigate = useNavigate();
  const [blockchain, setBlockchain] = React.useState(5);
  const [deploying, setDeploying] = React.useState(false);
  const [logo, setLogoImage] = React.useState(null);
  const { connected, provider } = useWeb3Context();

  const handleChange = (event) => {
    setBlockchain(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // alert(data.get("file").name);
    const contractName = "ERC721Pri";
   
    setDeploying(true);
    await deploy(contractName, await provider.getSigner());
    setDeploying(false);

    navigate('/collection/detail', {state: {
      name: contractName
    }});
  };

  const handleOnchangeFile = (file) => {
    setLogoImage(file);
    alert(file.name);
  };

  const deploy = async (contractName, signer) => {
    const abi = await (await (await fetch(`/abis/${contractName}.json`))).json();
    const factory = new ethers.ContractFactory(abi.abi, abi.bytecode, signer);
    const contract = await factory.deploy();
    await contract.deployTransaction.wait()
    return contract;
  };

  return (
    <Container
      sx={{
        maxWidth: "md",
      }}
    >
      {connected && (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            py: 8,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Create a Collection
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Logo Image *
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
              width: "1200px",
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
            Select the blockchain where you'd like new items from this
            collection to be added by default.
          </Typography>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={blockchain}
            label="Blockchain"
            onChange={handleChange}
            sx={{ width: "128px" }}
          >
            <MenuItem value={5}>Goerli</MenuItem>
            <MenuItem value={1}>Ethereum</MenuItem>
            <MenuItem value={137}>Polygon</MenuItem>
          </Select>

          <CssBaseline></CssBaseline>
          <br></br>
          <br></br>
          <Button type="submit" variant= { deploying?  "text": "contained"}  >
            {deploying? <CircularProgress /> :<>Create Collection</> }
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default CreateCollection;
