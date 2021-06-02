import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luís V. Capelletto</Text>
        <Text color="gray.300" fontSize="small">
          thecapellett@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Luís V. Capelletto"
        src="https://github.com/capelaum.png"
      />
    </Flex>
  );
}
