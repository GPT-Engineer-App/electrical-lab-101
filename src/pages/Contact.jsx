import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Contact Us</Heading>
      <Text fontSize="lg">
        For any inquiries regarding the Electrical Systems Laboratory, please reach out to us at:
      </Text>
      <Text fontSize="md">
        Email: electricalsystems@university.edu
      </Text>
      <Text fontSize="md">
        Phone: +1 (123) 456-7890
      </Text>
      <Text fontSize="md">
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
      </Text>
    </VStack>
  </Box>
);

export default Contact;