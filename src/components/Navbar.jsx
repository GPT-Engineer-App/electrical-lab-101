import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="blue.500" p={4}>
    <Flex>
      <Text fontSize="xl" color="white" fontWeight="bold">
        Electrical Systems Lab
      </Text>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;