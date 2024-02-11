import * as React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import UserCard from "../components/UserCard";

export default function Home() {
  const [users, setUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://api.github.com/users", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(users);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        style={{ marginBottom: "20px" }}
        sx={{ width: 300 }}
      />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          gap: 4,
        }}
      >
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </List>
    </Box>
  );
}
