import { Flex, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ChartBox } from "../components/ChartBox";
import Head from "next/Head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>DashGo | Dashboard</title>
      </Head>
      <Flex direction="column" h="100v">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid flex="1" gap="4" minChildWidth="300px" align="flex-start">
            <ChartBox title="Inscritos da semana" />
            <ChartBox title="Taxa de abertura" />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
