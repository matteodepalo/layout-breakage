import React from 'react';
import { render, Text, Box } from 'ink';

render(
  <Box width={80} borderStyle="round" borderColor="green">
    <Box paddingX={2}>
      <Box marginLeft={2}>
        <Text>•</Text>

        <Box flexGrow={1} marginLeft={1}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
)
