import {
  Tr,
  Td,
  Checkbox,
  Text,
  Box,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface UsersTableItemProps {
  name: string;
  email: string;
  date: string;
  isWideVersion: boolean;
}

export function UsersTableItem({
  name,
  email,
  date,
  isWideVersion,
}: UsersTableItemProps) {
  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
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
      {isWideVersion && <Td>{date}</Td>}
      <Td>
        <IconButton
          aria-label="edit user"
          as="a"
          size="sm"
          cursor="pointer"
          fontSize="sm"
          colorScheme="purple"
          icon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          {isWideVersion ? "Editar" : ""}
        </IconButton>
      </Td>
    </Tr>
  );
}
