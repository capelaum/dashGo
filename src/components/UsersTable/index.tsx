import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import { UsersTableItem } from "./UsersTableItem";

type user = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

interface UsersTableProps {
  users: user[];
}

export function UsersTable({ users }: UsersTableProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px={["4", "4", "6"]} color="gray.50" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isWideVersion && <Th>Data de cadastro</Th>}
          <Th width="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map(user => (
          <UsersTableItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            date={user.createdAt}
            isWideVersion={isWideVersion}
          />
        ))}
      </Tbody>
    </Table>
  );
}
