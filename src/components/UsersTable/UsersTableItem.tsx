import { Tr, Td, Checkbox, Text, Button, Box, Icon } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface UsersTableItemProps {
  name: string;
  email: string;
  date: string;
}

export function UsersTableItem({ name, email, date }: UsersTableItemProps) {
  return (
    <Tr>
      <Td px="6">
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.300">
            {email}
          </Text>
        </Box>
      </Td>
      <Td>{date}</Td>
      <Td>
        <Button
          as="a"
          size="sm"
          cursor="pointer"
          fontSize="sm"
          colorScheme="blue"
          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          Editar
        </Button>
      </Td>
    </Tr>
  );
}
