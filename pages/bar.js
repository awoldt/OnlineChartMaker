import React from "react";
import { Container } from "react-bootstrap";
import BarChart from "../components/charts/BarChart";
import ChartNav from "../components/ChartNav";
import CustomNavbar from "../components/CustomNavbar";

const Chart = () => {
  return (
    <>
      <CustomNavbar />
      <Container fluid>
        <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>
          Bar Chart Maker
        </h1>
        <ChartNav c={"/bar"} />
        <BarChart />
      </Container>
    </>
  );
};

export default Chart;
