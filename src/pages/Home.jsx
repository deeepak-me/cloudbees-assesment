import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";

export default function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(users);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      py={8}
      justifyContent={"space-between"}
      sx={{ gap: 2 }}
    >
      <Typography variant="h4">USER LIST</Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          gap: 4,
        }}
      >
        {users.map((user) => (
          <>
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
                primary={user.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.login}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}
          </>
        ))}
      </List>
    </Box>
  );
}
