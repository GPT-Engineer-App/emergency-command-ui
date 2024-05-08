import { Box, Button, Container, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaLock, FaUserShield } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">Emergency Command Center</Heading>
          <Text mt={4}>Secure Access Panel</Text>
          <Stack spacing={3} mt={4}>
            <Input placeholder="Username" size="md" />
            <Input placeholder="Password" type="password" size="md" />
            <Button rightIcon={<FaLock />} colorScheme="blue" variant="solid">
              Login
            </Button>
          </Stack>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">Operations Dashboard</Heading>
          <Text mt={4}>Real-time data and analytics</Text>
          <Stack spacing={3} mt={4}>
            <Button leftIcon={<FaUserShield />} colorScheme="teal" variant="solid">
              Manage Teams
            </Button>
            <Button leftIcon={<FaUserShield />} colorScheme="teal" variant="solid">
              View Reports
            </Button>
            <Button leftIcon={<FaUserShield />} colorScheme="teal" variant="solid">
              Emergency Alerts
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
