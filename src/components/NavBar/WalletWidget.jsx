import { useRootStore } from "../../store/root";

import {
  Box,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Skeleton,
  SvgIcon,
  Typography,
  Link,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from '@mui/icons-material/Edit';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FmdBadIcon from "@mui/icons-material/FmdBad";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React, { useState } from "react";
import { WalletModal } from "../ConnectWalletButton/WalletModal";
import { useWeb3Context } from "../../hooks/useWeb3Context";
import makeBlockie from "ethereum-blockies-base64";
import { Stack } from "@mui/system";

export const WalletWidget = ({ open, setOpen }) => {
  const setWalletModalOpen = useRootStore((state) => state.setWalletModalOpen);
  const [anchorEl, setAnchorEl] = useState(null);
  const [useBlockie, setUseBlockie] = useState(false);


  const {
    disconnectWallet,
    currentAccount,
    connected,
    loading,
    watchModeOnlyAddress,
  } = useWeb3Context();

  const networkConfig = {
    // todo: fix me
    name: "ethereum",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    if (!connected) {
      setWalletModalOpen(true);
    } else {
      setOpen(true);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleDisconnect = () => {
    if (connected) {
      disconnectWallet();
      handleClose();
    }
  };

  const handleCopy = async (event) => {
    navigator.clipboard.writeText(currentAccount);
    handleClose();
  };

  const handleSwitchWallet = () => {
    setWalletModalOpen(true);
    handleClose();
  };

  const textCenterEllipsis = (str, from, to) => {
    return `${str.substr(0, from)}...${str.substr(
      str.length - to,
      str.length
    )}`;
  };

  const ProfileList = () => {
    return (
      <Box padding={2}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Button startIcon={<PersonIcon></PersonIcon>}>Profile</Button>
          <Button startIcon={<CreateNewFolderIcon></CreateNewFolderIcon>} href="/create-collection">Create Collection</Button>
          <Button startIcon={<EditIcon></EditIcon>} href="/nft/create">Create NFT</Button>
        </Stack>
      </Box>
    );
  };

  const accountAvatar = (
    <img
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        border: "1px solid #FAFBFC1F",
        img: { width: "100%", height: "100%", borderRadius: "50%" },
      }}
      src={
        //   useBlockie ? makeBlockie(currentAccount !== '' ? currentAccount : 'default') : ensAvatar
        useBlockie
          ? makeBlockie(currentAccount !== "" ? currentAccount : "default")
          : "" // todo: fix ensAwatar
      }
      alt=""
      onError={() => setUseBlockie(true)}
    />
  );

  // define button content
  let buttonContent = <></>;
  if (currentAccount) {
    //   buttonContent = <>{ensNameAbbreviated ?? textCenterEllipsis(currentAccount, 4, 4)}</>;
    buttonContent = <>{textCenterEllipsis(currentAccount, 4, 4)}</>;
  } else {
    buttonContent = <>Connect wallet</>;
  }

  const Content = ({ component = ListItem }) => (
    <>
      <Typography
        variant="subheader2"
        sx={{
          display: { xs: "block", md: "none" },
          color: "#A5A8B6",
          px: 4,
          py: 2,
        }}
      >
        Account
      </Typography>

      <Box component={component} disabled>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid #FAFBFC1F",
                mr: 3,
                img: { width: "100%", height: "100%", borderRadius: "50%" },
              }}
            >
              {watchModeOnlyAddress && (
                <SvgIcon
                  color="warning"
                  sx={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: "35px",
                    left: "40px",
                    borderRadius: "50%",
                    //background: md ? '#383D51' : palette.background.paper,
                  }}
                >
                  <FmdBadIcon />
                </SvgIcon>
              )}
              <img
                src={
                  useBlockie
                    ? makeBlockie(
                        currentAccount !== "" ? currentAccount : "default"
                      )
                    : "" // TODO: fix ensAvatar
                }
                alt=""
                onError={() => setUseBlockie(true)}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* {ensNameAbbreviated && (
                <Typography variant="h4" color={{ xs: '#F1F1F3', md: 'text.primary' }}>
                  {ensNameAbbreviated}
                </Typography>
              )} */}

              <Typography
              // variant={ensNameAbbreviated ? 'caption' : 'h4'}
              // color={
              //   ensNameAbbreviated
              //     ? { xs: '#A5A8B6', md: 'text.secondary' }
              //     : { xs: '#F1F1F3', md: 'text.primary' }
              // }
              >
                {textCenterEllipsis(currentAccount, 7, 4)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {
        <Box
          sx={{ display: "flex", flexDirection: "row", padding: "0 16px 10px" }}
        >
          <Button
            variant="outlined"
            sx={{
              padding: "0 5px",
              marginRight: "10px",
            }}
            size="small"
            onClick={handleSwitchWallet}
          >
            Switch wallet
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "0 5px",
            }}
            size="small"
            onClick={handleDisconnect}
          >
            Disconnect
          </Button>
        </Box>
      }
      <Divider
        sx={{
          my: { xs: 7, md: 0 },
          borderColor: { xs: "#FFFFFF1F", md: "divider" },
        }}
      />

      <ProfileList></ProfileList>

      <Divider
        sx={{
          my: { xs: 7, md: 0 },
          borderColor: { xs: "#FFFFFF1F", md: "divider" },
        }}
      />

      <Box component={component} disabled>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography
              variant="caption"
              color={{ xs: "#FFFFFFB2", md: "text.secondary" }}
            >
              Network
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                //bgcolor: networkColor,
                width: 6,
                height: 6,
                mr: 2,
                boxShadow:
                  "0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
            />
            <Typography
              color={{ xs: "#F1F1F3", md: "text.primary" }}
              variant="subheader1"
            >
              {networkConfig.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          my: { xs: 7, md: 0 },
          borderColor: { xs: "#FFFFFF1F", md: "divider" },
        }}
      />

      <Box
        component={component}
        sx={{ color: { xs: "#F1F1F3", md: "text.primary" } }}
        onClick={handleCopy}
      >
        <ListItemIcon
          sx={{
            color: {
              xs: "#F1F1F3",
              md: "primary.light",
              minWidth: "unset",
              marginRight: 12,
            },
          }}
        >
          <SvgIcon fontSize="small">
            <ContentCopyIcon />
          </SvgIcon>
        </ListItemIcon>
        <ListItemText>Copy address</ListItemText>
      </Box>

      {
        <Link href="https://etherscan.io/address/0x221b8e423a2d0a17c696ea48b763c3c0cfd1685b">
          <Box
            component={component}
            sx={{ color: { xs: "#F1F1F3", md: "text.primary" } }}
            onClick={handleClose}
          >
            <ListItemIcon
              sx={{
                color: {
                  xs: "#F1F1F3",
                  md: "primary.light",
                  minWidth: "unset",
                  marginRight: 12,
                },
              }}
            >
              <SvgIcon fontSize="small">
                <OpenInNewIcon />
              </SvgIcon>
            </ListItemIcon>
            <ListItemText>View on Explorer</ListItemText>
          </Box>
        </Link>
      }
    </>
  );

  return (
    <>
      {loading ? (
        <Skeleton height={36} width={126} sx={{ background: "#383D51" }} />
      ) : (
        <Button
          variant={connected ? "outlined" : "contained"}
          aria-label="wallet"
          id="wallet-button"
          aria-controls={open ? "wallet-button" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            p: connected ? "5px 8px" : undefined,
            //   minWidth: hideWalletAccountText ? 'unset' : undefined,
          }}
          startIcon={connected && accountAvatar}
          endIcon={
            connected && (
              <SvgIcon
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </SvgIcon>
            )
          }
        >
          {buttonContent}
        </Button>
      )}
      <Menu
        id="wallet-menu"
        MenuListProps={{
          "aria-labelledby": "wallet-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted={true}
      >
        <MenuList
          disablePadding
          sx={{ ".MuiMenuItem-root.Mui-disabled": { opacity: 1 } }}
        >
          <Content component={MenuItem} />
        </MenuList>
      </Menu>
      <WalletModal></WalletModal>
    </>
  );
};
