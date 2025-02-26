"use client";

import { useEffect, useState } from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";

export default function Sidebar() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.example.com/sidebar-data")
  //     .then((res) => res.json())
  //     .then(setData)
  //     .catch((err) => console.error("Error fetching sidebar data:", err));
  // }, []);

  const temporalData = [
    {
      id: 1,
      name: "Chat 1",
      timestamp: new Date("2025-01-10T12:34:56Z"),
    },
    {
      id: 2,
      name: "Chat 2",
      timestamp: new Date("2024-01-11T16:45:01Z"),
    },
    {
      id: 3,
      name: "Chat 3",
      timestamp: new Date("2024-01-11T13:45:01Z"),
    },
  ];

  return (
    <Box bg="gray.900" color="white">
      <Stack p={4}>
        <Box fontSize="xl" fontWeight="bold">
          Recomendador
        </Box>
        <Divider />
        <Stack flexDir="column" gap={4}>
          {temporalData.map((chat) => (
            <Box
              key={chat.id}
              p={3}
              mb={2}
              borderRadius="md"
              bg="gray.800"
              boxShadow="lg"
            >
              <Text>{chat.name}</Text>
              <Text color="gray.400">{chat.timestamp.toLocaleString()}</Text>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
