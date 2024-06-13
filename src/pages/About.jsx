import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About Electrical Systems Lab</Heading>
      <Text fontSize="lg">
        Welcome to the Electrical Systems Laboratory for Year 1 undergraduate students. This course is designed to provide hands-on experience with fundamental electrical concepts and systems.
      </Text>
      <Text fontSize="md">
        Throughout this course, students will engage in various laboratory sessions that cover topics such as circuit analysis, electrical components, and system behavior. Each session is structured to enhance understanding through practical application.
      </Text>
    </VStack>
  </Box>
);

export default About;