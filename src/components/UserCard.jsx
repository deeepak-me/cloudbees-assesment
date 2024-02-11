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
      alignItems="flex-start"
      button
      component={Link}
      to={`/user/${user.login}`}
      sx={{ gap: 4, border: 0.2, borderRadius: 4, mb: 2 }}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={user.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        // primary={`${user.firstname} ${user.lastname}`}
        primary={user.login}
        // secondary={
        //   <React.Fragment>
        //     <Typography
        //       sx={{ display: "inline" }}
        //       component="span"
        //       variant="body2"
        //       color="text.primary"
        //     >
        //       {/* {user.login} */}
        //     </Typography>
        //   </React.Fragment>
        // }
      />
    </ListItem>
  );
};

export default UserCard;
