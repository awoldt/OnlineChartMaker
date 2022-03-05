import React from 'react'
import { Container } from 'react-bootstrap'
import ChartNav from '../components/ChartNav'
import RadarChart from '../components/charts/RadarChart'

const line = () => {
  return (
    <Container fluid>
      <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>Line Chart Maker</h1>
      <ChartNav c={'/radar'}/>
      <RadarChart />
    </Container>
  );
}

export default line