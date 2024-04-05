import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={8} mt={8}>
      <Text textAlign="center">
        © 2024 Particles. All rights reserved.
      </Text>
      <Text textAlign="center">
        123 Main St, Anytown, USA | info@particles.com
      </Text>
    </Box>
  );
};

export default Footer;