import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";

export default function Details() {
  const { username } = useParams();
  const [user, setUser] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setError(error.message);
      });
  }, []);

  console.log(user);

  if (error) {
    return <Typography variant="h4">Error: {error} User Not Found</Typography>;
  }

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
      {user && <DetailsCard user={user} />}
      <Button variant="contained" component={Link} to={`/`}>
        Go Back
      </Button>
    </Box>
  );
}
