import React from "react";
import { Container } from "react-bootstrap";
import ChartNav from "../components/ChartNav";
import RadarChart from "../components/charts/RadarChart";
import CustomNavbar from "../components/CustomNavbar";
import Head from "next/head";
import { useEffect } from "react";

const Radar = () => {
  useEffect(() => {
    const ga = document.createElement("script");
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-3C7HVYRD4Z";
    ga.async = true;
    document.head.appendChild(ga)

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-3C7HVYRD4Z");
  });
  return (
    <>
      <Head>
        <title>Simple Radar Chart Maker</title>
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
        <link rel="canonical" href="https://onlinechartmaker.com/radar" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4106301283765460"
     crossOrigin="anonymous"></script>
      </Head>
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

export default Radar;
