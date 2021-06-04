import {
  Tr,
  Td,
  Checkbox,
  Text,
  Box,
  Icon,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

interface UsersTableItemProps {
  id: number;
  name: string;
  email: string;
  date: string;
  isWideVersion: boolean;
}

export function UsersTableItem({
  id,
  name,
  email,
  date,
  isWideVersion,
}: UsersTableItemProps) {
  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(
      ["users", userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 min
      }
    );
  }

  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(id)}>
            <Text fontWeight="bold">{name}</Text>
          </Link>
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
