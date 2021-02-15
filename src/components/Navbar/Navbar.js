import { Flex, Box, Link, Text } from "rebass";

const Navbar = () => {
  return (
    <Flex px={2} py={3} color="black" bg="black" alignItems="center">
      <Text p={2} fontWeight="bold" color='white'>
        Rebass
      </Text>
      <Box mx='auto' />
      <Link
        px={3}
        py={[1,2]}
        sx={{
          textDecoration: "none",
          color: "#a0a0a0",
          //border: "2px solid  #ff512f",
          borderRadius: 8,
          transition: "all 0.5s ease",
          ":hover": {
            background: "linear-gradient(to right, #ff512f, #dd2476)",
            color: "white",
          },
        }}
        href="/"
      >
        Categories
      </Link>
      <Box mx={[0,"30px"]} />
      <Link
        px={3}
        py={[1,2]}
        sx={{
          textDecoration: "none",
          color: "#a0a0a0",
          //border: "2px solid  #ff512f",
          borderRadius: 8,
          transition: "all 0.5s ease",
          ":hover": {
            background: "linear-gradient(to right, #ff512f, #dd2476)",
            color: "white",
          },
        }}
        href="/"
      >
       Contact
      </Link>
      <Box mx={[0,"30px"]} />
      <Link
        px={3}
        py={[1,2]}
        sx={{
          textDecoration: "none",
          color: "#a0a0a0",
          border: "2px solid  #ff512f",
          borderRadius: 8,
          transition: "all 0.5s ease",
          ":hover": {
            background: "linear-gradient(to right, #ff512f, #dd2476)",
            color: "white",
          },
        }}
        href="/"
      >
        HIRE 
      </Link>
    </Flex>
  );
};

export default Navbar;
