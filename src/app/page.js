"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (formData.name && formData.password) {
      router.push("/chat"); // Redirect to chat page
    } else {
      alert("Please enter both name and password.");
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.100">
      <Box
        p={8}
        maxW="400px"
        w="full"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
      >
        <Stack spacing={6} align="center">
          <Image src="/logo.png" alt="Logo" boxSize="80px" />
          <Heading size="lg">Recommended chat</Heading>
        </Stack>

        <Stack spacing={4} mt={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <Button colorScheme="blue" w="full" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
