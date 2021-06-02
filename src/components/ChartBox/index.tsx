import { Box, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-06-01T00:00:00.000Z",
      "2021-05-30T00:00:00.000Z",
      "2021-05-29T00:00:00.000Z",
      "2021-05-28T00:00:00.000Z",
      "2021-05-27T00:00:00.000Z",
      "2021-05-26T00:00:00.000Z",
      "2021-05-25T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [31, 144, 69, 122, 33, 144, 51],
  },
];

interface ChartBoxProps {
  title?: string;
}

export function ChartBox({ title }: ChartBoxProps) {
  return (
    <Box p="8" bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  );
}
