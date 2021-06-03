import { useEffect } from "react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { UsersTable } from "../../components/UsersTable";

export default function UserList() {
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                cursor="pointer"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <UsersTable />
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
