import React from "react";
import { Container } from "react-bootstrap";
import BarChart from "../components/charts/BarChart";

const Chart = ({ chartTemplate }) => {
  return (
    <Container fluid>
      <h1>Bar Chart maker</h1>
      <BarChart ct={chartTemplate} />
    </Container>
  );
};

export default Chart;

export const getServerSideProps = async () => {
  const templateData = [
    {
      chartTitle: "Top Soda Sales",
      ds: [
        {
          label: "Coca-Cola",
          backgroundColor: "red",
          data: [1, 2, 3],
          themeCollapse: false,
        },
        {
          label: "Fanta",
          backgroundColor: "orange",
          data: [3, 1, 2],
          themeCollapse: false,
        },
        {
          label: "Sprite",
          backgroundColor: "green",
          data: [2, 3, 1],
          themeCollapse: false,
        },
      ],
    },

    {
      chartTitle: "UK Shoe Sales",
      ds: [
        {
          label: "Nike",
          backgroundColor: "black",
          data: [4, 5, 2],
          themeCollapse: false,
        },
        {
          label: "Addidas",
          backgroundColor: "grey",
          data: [4, 8, 5],
          themeCollapse: false,
        },
        {
          label: "Puma",
          backgroundColor: "red",
          data: [6, 6, 1],
          themeCollapse: false,
        },
      ],
    },
  ];
  const templateIndex = Math.floor(Math.random() * templateData.length);

  return {
    props: {
      chartTemplate: templateData[templateIndex],
    },
  };
};
