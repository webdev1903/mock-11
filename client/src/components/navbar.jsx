import { Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      width="100%"
      justify="space-around"
      border="1px solid black"
      padding="20px"
      fontSize="large"
      fontWeight="bold"
      top="0"
      position="sticky"
    >
      <Box>
        <Link to="/">SignUp</Link>
      </Box>
      <Box>
        <Link to="/signin">SignIn</Link>
      </Box>
      <Box>
        <Link to="/dashboard">Dashboard</Link>
      </Box>
    </Stack>
  );
}
