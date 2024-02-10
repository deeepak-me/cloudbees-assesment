import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      py={8}
      justifyContent={"space-between"}
      sx={{ gap: 2 }}
    >
      <Typography variant="h4">USER DETAILS</Typography>
      {user && (
        <Card sx={{ width: 345, borderRadius: 6 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={user.avatar_url}
              alt={user.username}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body1">Username: {user.login}</Typography>
              <Typography variant="body1">
                Company: {user.company || "N/A"}
              </Typography>
              <Typography variant="body1">
                Followers: {user.followers}
              </Typography>
              <Typography variant="body1">
                Following: {user.following}
              </Typography>
              <Typography variant="body1">
                Public Repositories: {user.public_repos}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      <Button variant="contained" component={Link} to={`/`}>
        Go Back
      </Button>
    </Box>
  );
}
