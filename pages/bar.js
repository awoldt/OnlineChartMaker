import React from "react";
import { Container } from "react-bootstrap";
import BarChart from "../components/charts/BarChart";

const Chart = () => {
  return (
    <Container fluid>
      <h1>Bar Chart maker</h1>
      <BarChart />
    </Container>
  );
};

export default Chart;
