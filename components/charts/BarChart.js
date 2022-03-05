import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col, Collapse, Button } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import LabelCollapse from "../LabelCollapse";

import DatasetCollapse from "../datasetCollapse";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//////////////////////////////////////////////////////////////////

const BarChart = () => {
  const [chartTitle, setChartTitle] = useState("Soda Sales (in Millions)");
  const [indexAxis, setIndexAxis] = useState("x");
  const [howToUseCollapse, setHowToUseCollapse] = useState(false);

  const [dataset, setDataset] = useState([
    {
      label: "Coca-Cola",
      backgroundColor: "rgb(255, 0, 0, .8)",
      data: [543, 234, 435],
      themeCollapse: false,
    },
    {
      label: "Fanta",
      backgroundColor: "rgb(255,165,0, .8)",
      data: [645, 765, 234],
      themeCollapse: false,
    },
    {
      label: "Sprite",
      backgroundColor: "rgb(0, 128, 0, .8)",
      data: [765, 345, 879],
      themeCollapse: false,
    },
  ]);
  const [labels, setLabels] = useState(["January", "February", "March"]);

  const data = {
    labels,
    datasets: dataset,
  };

  const options = {
    indexAxis: indexAxis,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  return (
    <Row style={{ padding: "50px" }}>
      <Col lg={8}>
        <Bar options={options} data={data} />
      </Col>

      <Col lg={4}>
        <div style={{ marginBottom: "25px" }}>
          <Button
            style={{ marginTop: "25px" }}
            onClick={() => {
              setHowToUseCollapse(!howToUseCollapse);
            }}
            role="button"
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
          </Button>
          <Button
            style={{ marginTop: "25px", marginLeft: "25px" }}
            variant="danger"
            role={"button"}
            onClick={() => {
              setChartTitle("");
              setDataset([]);
              setLabels([]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>{" "}
            Restart
          </Button>

          <Collapse in={howToUseCollapse}>
            <div style={{ marginTop: "10px", maxWidth: "600px" }}>
              <p>
                Making a bar chart has never been easier. All changes made will
                be automatically reflected as you build your custom chart. Each
                chart is composed of 3 main parts:
              </p>
              <ul>
                <li>Title</li>
                <li>Label</li>
                <li>Dataset</li>
              </ul>
              <h2>Title</h2>
              <p>
                The chart title represents a basic description of what the chart
                is attempting to display. It can be found at the top of the
                chart graphic in small grey font.{" "}
              </p>
              <h2>Datasets</h2>
              <p>
                Datasets are the main building block of every chart. A dataset
                is a single entity that can be represented with values that will
                reflect on the chart. For example, in the example chart
                displayed the 3 different datasets used are Coca-Cola, Fanta,
                and Sprite. Notice how each of these are all different bars on
                the graph with different colors. Each dataset will have values
                that are needed to be displayed alongside each label.{" "}
              </p>
              <h2>Labels</h2>
              <p>
                Labels are what each dataset corresponds with on the chart. The
                number of labels will affect how many values each dataset has
                access to. For example, in the template chart the 3 main labels
                used are January, February, and March. With these different
                labels each representing what month of the year it is, the
                dataset for each soda will each have access to each month label
                and be able to plot its value for that label on the chart.{" "}
              </p>
            </div>
          </Collapse>
        </div>

        <div
          style={{
            backgroundColor: "rgb(242, 242, 242, .5)",
            borderRadius: "10px",
            padding: "25px",
          }}
        >
          <label
            htmlFor="chart_title"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Chart Title
          </label>
          <DebounceInput
            onChange={(x) => {
              setChartTitle(x.target.value);
            }}
            debounceTimeout={500}
            className={"form-control"}
            style={{ maxWidth: "400px", marginBottom: "25px" }}
            id="chart_title"
            maxLength={100}
            placeholder={chartTitle}
          />
          <LabelCollapse
            l={labels}
            sl={setLabels}
            sd={setDataset}
            st={setChartTitle}
          />
          <DatasetCollapse
            d={dataset}
            setd={setDataset}
            la={labels}
            chartType={"bar"}
          />
          <div style={{ marginTop: "25px" }}>
            <span style={{ display: "block" }}>Options</span>
            <input
              type="checkbox"
              id="invert_axis"
              style={{
                marginRight: "3px",
                marginTop: "10px",
              }}
              onClick={(x) => {
                if (x.target.checked == false) {
                  setIndexAxis("x");
                } else {
                  setIndexAxis("y");
                }
              }}
            />
            <label htmlFor="invert_axis">Invert axis</label>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BarChart;
