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

export function UsersTable() {
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
        <UsersTableItem
          name="Luís V. Capelletto"
          email="luis.capelletto@gmail.com"
          date="01 de Junho, 2021"
          isWideVersion={isWideVersion}
        />

        <UsersTableItem
          name="Viton"
          email="viton@gmail.com"
          date="02 de Junho, 2021"
          isWideVersion={isWideVersion}
        />

        <UsersTableItem
          name="Manga"
          email="manga@gmail.com"
          date="03 de Junho, 2021"
          isWideVersion={isWideVersion}
        />
      </Tbody>
    </Table>
  );
}
