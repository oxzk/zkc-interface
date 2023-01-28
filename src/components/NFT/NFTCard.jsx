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
        unit: "ETH"
    }

  return (
    <>
      <Card sx={{ maxWidth: 277.25 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={277.25}
            width={277.25}
            image={NFT.img}
            alt={NFT.name + "-" + NFT.id}
          />
          <CardContent>
            <Typography variant="h6">
              {NFT.name}{" #"}{NFT.id}
            </Typography>
            <Typography gutterBottom variant="h5">
              {NFT.price}{" "}{NFT.unit}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
