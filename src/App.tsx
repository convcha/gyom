import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          gyom
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
