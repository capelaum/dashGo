import { Table, Thead, Tbody, Th, Tr, Checkbox } from "@chakra-ui/react";
import { UsersTableItem } from "./UsersTableItem";

export function UsersTable() {
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px="6" color="gray.50" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th width="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <UsersTableItem
          name="Luís V. Capelletto"
          email="luis.capelletto@gmail.com"
          date="01 de Junho, 2021"
        />

        <UsersTableItem
          name="Viton"
          email="viton@gmail.com"
          date="02 de Junho, 2021"
        />

        <UsersTableItem
          name="Manga"
          email="manga@gmail.com"
          date="03 de Junho, 2021"
        />
      </Tbody>
    </Table>
  );
}
