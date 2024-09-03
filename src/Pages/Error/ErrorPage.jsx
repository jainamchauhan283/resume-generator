import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Box mt={"32"} textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h1"
          size="4xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="20px" mt={3} mb={2}>
          Page Not Found
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
