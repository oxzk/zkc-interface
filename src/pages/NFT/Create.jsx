import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Switch,
  Button,
  OutlinedInput,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Stack } from "@mui/system";
import { Upload } from "@web3uikit/core";
import { useState } from "react";

export const CreateNFT = () => {
  const Item = ({ children }) => {
    return <Box>{children}</Box>;
  };

  const [cid, setCid] = useState("");

  const handleChange = (event) => {
    setCid(event.target.value);
  };

  const [fixedPrice, setFixedPrice] = useState(true)

  const handleSelectFixedPrice = (event) => {
    setFixedPrice(!fixedPrice);
  }

  // TODO: fetch from db
  const collectionList = [
    {
      id: 1,
      name: "NFT721Pri",
      addr: "0x5bCc535A036be98f2A00C962db81A117fbB69343",
    },
    { id: 2, name: "NFT721Pri#2" },
    { id: 3, name: "NFT721Pri#3" },
    { id: 4, name: "NFT721Pri#4" },
  ];

  return (
    <Container
      sx={{
        maxWidth: "md",
      }}
    >
      <Typography variant="h3" gutterBottom paddingTop={8}>
        Create new NFT
      </Typography>

      <Box component="form">
        <Stack direction="column" spacing={2}>
          <Item>
            <Typography variant="subtitle1" gutterBottom>
              Upload File *
            </Typography>

            <Box
              sx={{
                width: "250px",
              }}
            >
              <Upload id="nftImg"></Upload>
            </Box>
          </Item>

          <Item>
            <Typography variant="subtitle1" gutterBottom>
              Name *
            </Typography>

            <TextField
              id="nftName"
              label="Name of your NFT"
              variant="outlined"
              name="nftName"
              sx={{
                width: "40%",
              }}
            />
          </Item>

          <Item>
            <Typography variant="subtitle1" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2" gutterBottom color="gray">
              Markdown syntax is supported. 0 of 1000 characters used.
            </Typography>
            <TextField
              id="description"
              name="description"
              // label="Multiline"
              multiline
              rows={4}
              defaultValue="Provide detailed description of your NFT ..."
              sx={{
                width: "60%",
              }}
            />
          </Item>

          <Item>
            <Typography variant="subtitle1" gutterBottom>
              Choose Collection *
            </Typography>

            <Box width={300}>
              <FormControl fullWidth>
                <InputLabel id="collection-name">Collection Name</InputLabel>
                <Select
                  labelId="collection-select-label"
                  id="ollection-name-select"
                  value={cid}
                  label="Collection"
                  onChange={handleChange}
                >
                  {collectionList.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Item>

          <Item>
            <Stack direction="row">
              <Item>
                <Typography color="#ff7961">Secret NFT</Typography>
                <Typography variant="body2" gutterBottom color="gray">
                  The Owner's blockchain address will be hidden
                </Typography>
              </Item>

              <Item>
                <FormControlLabel
                  control={<Switch defaultChecked label="Label" />}
                  sx={{
                    marginLeft: 10,
                  }}
                ></FormControlLabel>
              </Item>
            </Stack>
          </Item>

          <Item>
            <Typography variant="subtitle1" gutterBottom>
              Put on marketplace
            </Typography>
            <Typography variant="body2" gutterBottom color="gray">
              Enter price to allow users instantly purchase your NFT
            </Typography>

            <Stack direction="row">
              <Button
                variant="outlined"
                sx={{
                  width: 100,
                  height: 100,
                  mr: 2,
                }}
                onClick = {handleSelectFixedPrice}
              >
                Fixed price
              </Button>

              <Button
                variant="contained"
                disabled
                sx={{
                  width: 100,
                  height: 100,
                  mr: 2,
                }}
              >
                Timed auction
              </Button>

              <Button
                variant="contained"
                disabled
                sx={{
                  width: 100,
                  height: 100,
                  mr: 2,
                }}
              >
                Drop
              </Button>
            </Stack>
            {fixedPrice &&
            <Stack direction="column" width={250}>
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="price"
              sx={{mt:2}}
            />

              <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">1%</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="Service fee"
              sx={{mt:0.5}}
            />

          <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder = "You will receive"
              sx={{mt:0.5}}
            />
            </Stack>
          }
          </Item>

          <Item>
            <Button variant="contained">Create</Button>
          </Item>
        </Stack>
      </Box>
    </Container>
  );
};
