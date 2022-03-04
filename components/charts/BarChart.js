import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
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
        <input
          type="checkbox"
          id="invert_axis"
          style={{
            marginRight: "3px",
            marginTop: "10px",
            width: "20px",
            height: "20px",
          }}
          onClick={(x) => {
            if (x.target.checked == false) {
              setIndexAxis("x");
            } else {
              setIndexAxis("y");
            }
          }}
        />
        <label htmlFor="invert_axis" style={{ fontSize: "25px" }}>
          Invert axis
        </label>
      </Col>
      <Col
        lg={4}
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
          style={{ maxWidth: "400px", marginBottom: "50px" }}
          id="chart_title"
          maxLength={100}
          placeholder={chartTitle}
        />
        <LabelCollapse l={labels} sl={setLabels} sd={setDataset} />
        <DatasetCollapse d={dataset} setd={setDataset} la={labels} />
      </Col>
    </Row>
  );
};

export default BarChart;
