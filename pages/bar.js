import React from "react";
import { Container } from "react-bootstrap";
import BarChart from "../components/charts/BarChart";
import ChartNav from "../components/ChartNav";
import CustomNavbar from "../components/CustomNavbar";
import Head from "next/head";

const Chart = () => {
  
  return (
    <>
      <Head>
        <title>Simple Bar Chart Maker</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="canonical" href="https://onlinechartmaker.com/bar" />
       
      </Head>
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
