import React from "react";
import { Container } from "react-bootstrap";
import PieChart from "../components/charts/PieChart";
import ChartNav from "../components/ChartNav";

const line = () => {
  return (
    <Container fluid>
      <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>Pie Chart Maker</h1>
      <ChartNav c={"/pie"} />
      <PieChart />
    </Container>
  );
};

export default line;
