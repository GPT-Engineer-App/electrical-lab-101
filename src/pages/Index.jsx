import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Electrical Systems Lab</Heading>
        <Text fontSize="lg">Explore the fundamentals of electrical systems through hands-on laboratory sessions.</Text>
      </VStack>
    </Container>
  );
};

export default Index;