import React from "react";
import { Container } from "react-bootstrap";
import BarChart from "../components/charts/BarChart";

const Chart = () => {
  return (
    <Container fluid>
      <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>Bar Chart Maker</h1>
      <BarChart />
    </Container>
  );
};

export default Chart;
