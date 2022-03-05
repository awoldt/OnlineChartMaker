import React from "react";
import { Nav } from "react-bootstrap";

const ChartNav = ({ c }) => {
  return (
    <Nav variant="pills" defaultActiveKey={c} style={{ marginLeft: "25px" }}>
      <Nav.Item role={"button"}>
        <Nav.Link href="/bar">Bar</Nav.Link>
      </Nav.Item>
      <Nav.Item role={"button"}>
        <Nav.Link href="/line">Line</Nav.Link>
      </Nav.Item>
      <Nav.Item role={"button"}>
        <Nav.Link href="/radar">Radar</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default ChartNav;
