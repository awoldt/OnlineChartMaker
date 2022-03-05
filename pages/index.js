import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import Head from "next/head";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiOutlineRadarChart } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <Head>
        <title>Easy & Powerful Chart Maker</title>
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
        <link rel="canonical" href="https://onlinechartmaker.com" />
      </Head>
      <CustomNavbar />
      <Container className="text-center">
        <h1 style={{ fontSize: "60px", maxWidth: "600px", margin: "auto" }}>
          Making a Chart Has Never Been Easier
        </h1>
        <p className="mt-3">
          Choose from a variety of charts and custom make it how you like.
          Support on both desktop and mobile devices.
        </p>

        <h2 style={{ marginTop: "50px" }}>Supported Charts</h2>
        <Row>
          <Col>
            <a href={"/bar"} style={{ textDecoration: "none", color: "grey" }}>
              <BsFillBarChartFill size={200} />
              <span style={{ display: "block", color: "black" }}>
                Bar chart
              </span>
            </a>
          </Col>
          <Col>
            <a href={"/line"} style={{ textDecoration: "none", color: "grey" }}>
              <AiOutlineAreaChart size={200} />
              <span style={{ display: "block", color: "black" }}>
                Line chart
              </span>
            </a>
          </Col>
          <Col>
            <a
              href={"/radar"}
              style={{ textDecoration: "none", color: "grey" }}
            >
              <AiOutlineRadarChart size={200} />
              <span style={{ display: "block", color: "black" }}>
                Radar chart
              </span>
            </a>
          </Col>
        </Row>

        <p className="text-center" style={{ marginTop: "100px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-brush"
            viewBox="0 0 16 16"
          >
            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
          </svg>{" "}
          Made by{" "}
          <a
            href="https://awoldt.com"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Awoldt
          </a>
        </p>
      </Container>
    </>
  );
}
