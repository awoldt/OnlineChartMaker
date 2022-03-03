import React from "react";
import { Row, Col, Collapse } from "react-bootstrap";

const ThemeCollapse = ({ d, sd, s, i }) => {
  return (
    <Collapse in={s.themeCollapse}>
      <div>
        <Row id="theme_colors_collapse_div" style={{ padding: "25px" }}>
          <Col>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                cursor: "pointer",
              }}
              onClick={() => {
                const t = [...d];
                t[i].backgroundColor = "red";
                t[i].themeCollapse = !t[i].themeCollapse;

                sd(t);
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "blue",
                cursor: "pointer",
              }}
              onClick={() => {
                const t = [...d];
                t[i].backgroundColor = "blue";
                t[i].themeCollapse = !t[i].themeCollapse;

                sd(t);
              }}
            ></div>
          </Col>

          <Col>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "green",
                cursor: "pointer",
              }}
              onClick={() => {
                const t = [...d];
                t[i].backgroundColor = "green";
                t[i].themeCollapse = !t[i].themeCollapse;

                sd(t);
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "yellow",
                cursor: "pointer",
              }}
              onClick={() => {
                const t = [...d];
                t[i].backgroundColor = "yellow";
                t[i].themeCollapse = !t[i].themeCollapse;

                sd(t);
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "orange",
                cursor: "pointer",
              }}
              onClick={() => {
                const t = [...d];
                t[i].backgroundColor = "orange";
                t[i].themeCollapse = !t[i].themeCollapse;

                sd(t);
              }}
            ></div>
          </Col>
        </Row>
      </div>
    </Collapse>
  );
};

export default ThemeCollapse;
