import { DebounceInput } from "react-debounce-input";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

const LabelCollapse = ({ l, sl }) => {
  const [datasetCollapse, setDatasetCollapse] = useState(false);

  return (
    <>
      <span
        aria-expanded={datasetCollapse}
        aria-controls="labels_collapse_div"
        style={{ cursor: "pointer", display: "block" }}
        onClick={() => {
          setDatasetCollapse(!datasetCollapse);
        }}
      >
        <h2 style={{ display: "inline" }}>Labels ({l.length})</h2>
        <span>
          <svg
            style={{ marginLeft: "5px", paddingBottom: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </span>
      </span>

      <Collapse in={datasetCollapse}>
        <div id="labels_collapse_div">
          {l.map((x, index) => {
            return (
              <DebounceInput
                key={index}
                placeholder={x}
                className="form-control"
                debounceTimeout={500}
                onChange={(x) => {
                  const y = [...l];
                  y[index] = x.target.value;
                  sl(y);
                }}
              ></DebounceInput>
            );
          })}
          <p
            className="text-center mt-4"
            style={{ color: "#0d6efd", cursor: "pointer" }}
            role="button"
            onClick={() => {
              const x = [...l];
              x.push("");
              sl(x);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0d6efd"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>{" "}
            Add label
          </p>
        </div>
      </Collapse>
    </>
  );
};
export default LabelCollapse;
