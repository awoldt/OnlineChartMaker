/* 

THIS COMPONENT NEEDS CUSTOM CODE TO WORK FOR RADAR CHARTS
THIS WILL ONLY RENDER ON RADAR PAGE

*/

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

const ThemeCollapseLine = ({ d, sd, s, i }) => {
  const colors = [
    "rgb(255, 0, 0, .4)",
    "rgb(0, 0, 255, .4)",
    "rgb(0, 128, 0, .4)",
    "rgb(255, 255, 0, .4)",
    "rgb(255,165,0, .4)",
    "rgb(128, 0, 128, .4)",
    "rgb(0,0,0, .4)",
    "rgb(128, 128, 128, .4)",
  ];
  const colorsUsed = d.map((x) => {
    return x.backgroundColor;
  }); //CANNOT use these colors on new datasets, already in use

  const c = getAvailableColors(colors, colorsUsed);

  return (
    <Collapse
      in={s.themeCollapse}
      style={{ paddingLeft: "25px", paddingRight: "25px", marginTop: "10px" }}
    >
      <div>
        <Row
          id="theme_colors_collapse_div"
          style={{ padding: "25px", backgroundColor: "#f2f2f2" }}
        >
          {c.map((x, index) => {
            return (
              <Col xs={4} className="mb-3" key={index}>
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
                    t[i].borderColor = x;
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

export default ThemeCollapseLine;
