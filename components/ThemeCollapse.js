import React from "react";
import { Row, Col, Collapse } from "react-bootstrap";

function getAvailableColors(x, y) {
  const z = x.filter((e) => {
    if (y.indexOf(e) == -1) {
      return e;
    }
  });

  return z;
}

const ThemeCollapse = ({ d, sd, s, i }) => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "black",
    "grey",
  ];
  const colorsUsed = d.map((x) => {
    return x.backgroundColor;
  }); //CANNOT use these colors on new datasets, already in use

  const c = getAvailableColors(colors, colorsUsed);

  return (
    <Collapse in={s.themeCollapse}>
      <div>
        <Row id="theme_colors_collapse_div" style={{ padding: "25px" }}>
          {c.map((x) => {
            return (
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: x,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const t = [...d];
                    t[i].backgroundColor = x;
                    t[i].themeCollapse = !t[i].themeCollapse;

                    sd(t);
                  }}
                ></div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Collapse>
  );
};

export default ThemeCollapse;
