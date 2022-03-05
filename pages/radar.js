import React from "react";
import { Container } from "react-bootstrap";
import ChartNav from "../components/ChartNav";
import RadarChart from "../components/charts/RadarChart";
import CustomNavbar from "../components/CustomNavbar";

const line = () => {
  return (
    <>
    <CustomNavbar />
    <Container fluid>
      <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>
        Radar Chart Maker
      </h1>
      <ChartNav c={"/radar"} />
      <RadarChart />
    </Container>
  </>
  );
};

export default line;
