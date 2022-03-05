import React from 'react'
import { Container } from 'react-bootstrap'
import LineChart from '../components/charts/LineChart'
import ChartNav from '../components/ChartNav'

const line = () => {
  return (
    <Container fluid>
      <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>Line Chart Maker</h1>
      <ChartNav c={'/line'}/>
      <LineChart />
    </Container>
  );
}

export default line