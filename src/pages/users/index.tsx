import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { UsersTable } from "../../components/UsersTable";
import Head from "next/Head";
import { api } from "../../services/api";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery(
    "users",
    async () => {
      const { data } = await api.get("users");

      const users = data.users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        };
      });

      return users;
    },
    // 5 seconds fresh time
    { staleTime: 1000 * 5 }
  );

  return (
    <>
      <Head>
        <title>DashGo | Users</title>
      </Head>
      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.500" ml="4"></Spinner>
                )}
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

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter os dados dos usuários</Text>
              </Flex>
            ) : (
              <>
                <UsersTable users={data} />
                <Pagination />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
