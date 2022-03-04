import React from "react";
import { Container, Collapse } from "react-bootstrap";
import { useState } from "react";
import BarChart from "../components/charts/BarChart";

const Chart = () => {
  const [howToUseCollapse, setHowToUseCollapse] = useState(false);

  return (
    <Container fluid>
      <h1 style={{ marginLeft: "25px", marginTop: "25px" }}>Bar Chart Maker</h1>
      <BarChart />
      <div style={{ padding: "25px" }}>
        <div
          className="btn btn-primary"
          style={{ marginTop: "25px" }}
          onClick={() => {
            setHowToUseCollapse(!howToUseCollapse);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>{" "}
          How to Use
        </div>

        <Collapse in={howToUseCollapse}>
          <div style={{ marginTop: "10px", maxWidth: '600px'}}>
            <p>
              Making a bar chart has never been easier. All changes made will be automitcally reflected as you build your custom chart. Each chart is composed
              of 3 main parts:
            </p>
            <ul>
              <li>Title</li>
              <li>Label</li>
              <li>Dataset</li>
            </ul>
            <h2>Title</h2>
            <p>
              The chart title represents a basic description of what the chart
              is attempting to display. It can be found at the top of the chart
              graphic in small grey font.{" "}
            </p>
            <h2>Datasets</h2>
            <p>
              Datasets are the main building block of every chart. A dataset is
              a single entity that can be represented with values that will
              reflect on the chart. For example, in the example chart displayed
              the 3 different datasets used are Coca-Cola, Fanta, and Sprite.
              Notice how each of these are all different bars on the graph with
              different colors. Each dataset will have values that are needed to
              be displayed alongside each label.{" "}
            </p>
            <h2>Labels</h2>
            <p>
              Labels are what each dataset will correspond with on the chart.
              The number of labels will effect how many values each dataset has
              acces to. For example, in the template chart the 3 main labels
              used are January, February, and March. With these different labels
              each representing what month of the year it is, the dataset for
              all the sodas will each have access to a label and be able to plot
              its value for that label on the chart.{" "}
            </p>
          </div>
        </Collapse>
      </div>
    </Container>
  );
};

export default Chart;
