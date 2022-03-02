import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
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
  const [chartTitle, setChartTitle] = useState("Soda Sales for First 6 Months");
  const [dataset, setDataset] = useState([
    {
      label: "Coca-Cola",
      backgroundColor: "#F40009",
      data: [1, 3, 4, 34, 5, 34],
    },
    {
      label: "Fanta",
      backgroundColor: "#FF8300",
      data: [1, 3, 4, 34, 5, 34],
    },
    {
      label: "Sprite",
      backgroundColor: "#008B47",
      data: [1, 3, 4, 34, 5, 34],
    },
  ]);
  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ]);

  const data = {
    labels,
    datasets: dataset,
  };

  const options = {
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
      <Col lg={6}>
        <Bar options={options} data={data} />
      </Col>
      <Col lg={6}>
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
        <label htmlFor="chart_title">Datasets ({dataset.length})</label>
        <ul>
          {dataset.map((x, index) => {
            return (
              <>
                <li>{x.label}</li>
                <DebounceInput
                  onChange={(x) => {
                    const d = [...dataset];
                    d[index].label = x.target.value;
                    setDataset(d);
                  }}
                  debounceTimeout={500}
                  className={"form-control"}
                  style={{ maxWidth: "400px" }}
                  maxLength={100}
                  key={index}
                />
                {labels.map((y, index2) => {
                  return (
                    <div key={index2}>
                      <label>{y}</label>
                      <DebounceInput
                        onChange={(x) => {
                          if (isNaN(x.target.value)) {
                            alert("must be a number");
                          } else {
                            const d = [...dataset];
                            d[index].data[index2] = x.target.value;
                            setDataset(d);
                          }
                        }}
                        debounceTimeout={500}
                        className={"form-control"}
                        style={{ maxWidth: "100px", display: "inline" }}
                        maxLength={20}
                      />
                    </div>
                  );
                })}
                <hr></hr>
              </>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
};

export default BarChart;
