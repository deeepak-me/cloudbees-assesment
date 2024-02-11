import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <ListItem
      key={user.id}
      alignItems="center"
      button
      component={Link}
      to={`/user/${user.login}`}
      sx={{
        gap: 4,
        border: 0.2,
        borderRadius: 4,
        mb: 2,
        fontFamily: "YourCustomFont, sans-serif",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={user.avatar_url} />
      </ListItemAvatar>
      <ListItemText primary={user.login} sx={{ padding: 2, ml: 2 }} />
    </ListItem>
  );
};

export default UserCard;
