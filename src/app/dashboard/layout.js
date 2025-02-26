"use client";

import { ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";

export default function RootProvider({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <ChakraProvider>
          <Grid templateColumns="3fr 9fr" h="100vh">
            <GridItem bg="gray.900" color="white" p={4}>
              <Box fontSize="xl" fontWeight="bold">
                Sidebar
              </Box>
            </GridItem>

            <GridItem bg="gray.100" p={6}>
              {children}
            </GridItem>
          </Grid>
        </ChakraProvider>
      </body>
    </html>
  );
}
