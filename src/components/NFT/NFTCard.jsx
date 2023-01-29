// sole nft display card

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const NFTCard = () => {
  // demo data
  const NFT = {
    img: "https://i.seadn.io/gcs/files/32cd8cc8f97fb3e5616b6b6f97fc8814.png?auto=format&w=750",
    name: "Azuki",
    id: 5219,
    price: 14.7568,
    unit: "ETH",
  };

  return (
    <Card sx={{ maxWidth: 320, borderRadius: "3%" }} elevation={1}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={250}
          image={NFT.img}
          alt={NFT.name + "-" + NFT.id}
        />
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            {NFT.name}
            {" #"}
            {NFT.id}
          </Typography>
          <Typography  variant="subtitle1">
            {NFT.price} {NFT.unit}
          </Typography>
          <Typography  variant="body2" color="gray">
            Last sale: 10.08 ETH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
