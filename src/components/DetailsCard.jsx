import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const DetailsCard = ({ user }) => {
  return (
    <div>
      <Card sx={{ width: 345, borderRadius: 6 }}>
        <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            height="170"
            image={user.avatar_url}
            alt={user.username}
          />
          <CardContent
            sx={{ flex: 1, fontFamily: "YourCustomFont, sans-serif" }}
          >
            <Typography variant="h5" component="div" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Username: {user.login}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Company: {user.company || "N/A"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Followers: {user.followers}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Following: {user.following}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Public Repositories: {user.public_repos}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default DetailsCard;
