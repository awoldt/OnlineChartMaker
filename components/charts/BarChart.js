import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import ThemeCollapse from "../ThemeCollapse";
import LabelInputs from "../LabelInputs";
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

const BarChart = ({ ct }) => {
  const [chartTitle, setChartTitle] = useState(ct.chartTitle);
  const [indexAxis, setIndexAxis] = useState("x");
  const [dataset, setDataset] = useState(ct.ds);
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
        <Bar
          style={{ border: "1px solid black", padding: "10px" }}
          options={options}
          data={data}
        />
        <input
          type="checkbox"
          id="invert_axis"
          style={{ marginRight: "3px" }}
          onClick={(x) => {
            if (x.target.checked == false) {
              setIndexAxis("x");
            } else {
              setIndexAxis("y");
            }
          }}
        />
        <label htmlFor="invert_axis">Invert axis</label>
      </Col>
      <Col lg={4}>
        <label htmlFor="chart_title">Chart Title</label>
        <DebounceInput
          onChange={(x) => {
            setChartTitle(x.target.value);
          }}
          debounceTimeout={500}
          className={"form-control"}
          style={{ maxWidth: "400px" }}
          id="chart_title"
          maxLength={100}
        />
        <hr></hr>
        <p>
          Datasets ({dataset.length}){" "}
          {dataset.map((x, index) => {
            if (index == dataset.length - 1) {
              return " and " + x.label;
            } else {
              return x.label + ", ";
            }
          })}
        </p>
        {/* loop through all data topics ex: coke, sprite, fanta */}
        {dataset.map((x, index) => {
          return (
            <div
              key={index}
              style={{ border: "1px solid red", padding: "10px" }}
            >
              <h2 style={{ display: "inline" }}>{x.label} </h2>{" "}
              <span
                aria-expanded={x.themeCollapse}
                aria-controls="theme_colors_collapse_div"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const t = [...dataset];
                  t[index].themeCollapse = !t[index].themeCollapse;
                  setDataset(t);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-brush"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                </svg>
                <div
                  style={{
                    backgroundColor: x.backgroundColor,
                    width: "15px",
                    height: "15px",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                ></div>
              </span>
              <ThemeCollapse d={dataset} sd={setDataset} s={x} i={index} />
              <DebounceInput
                placeholder={"Name"}
                onChange={(x) => {
                  const d = [...dataset];
                  d[index].label = x.target.value;
                  setDataset(d);
                }}
                debounceTimeout={500}
                className={"form-control"}
                style={{ maxWidth: "400px", marginTop: "25px" }}
                maxLength={100}
                key={index}
              />
              <LabelInputs d={dataset} l={labels} sd={setDataset} i1={index} />
              <hr></hr>
            </div>
          );
        })}
        {dataset.length < 8 && (
          <p
            className="text-center mt-4"
            style={{ color: "blue", cursor: "pointer" }}
            role="button"
            onClick={() => {
              if (dataset.length < 8) {
                const d = [...dataset];
                d.push({
                  label: "",
                  backgroundColor: null,
                  data: [0, 0, 0],
                  themeCollapse: false,
                });
                setDataset(d);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>{" "}
            Add dataset
          </p>
        )}
      </Col>
    </Row>
  );
};

export default BarChart;
