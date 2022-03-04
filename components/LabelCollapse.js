import { DebounceInput } from "react-debounce-input";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

const LabelCollapse = ({ l, sl, sd }) => {
  const [datasetCollapse, setDatasetCollapse] = useState(false);
  const [collapsed, setCollapsed] = useState(true); //collapsed on pageload

  return (
    <div
      style={{
        backgroundColor: "rgb(242, 242, 242)",
        padding: "15px",
        marginBottom: "25px",
      }}
    >
      <span
        aria-expanded={datasetCollapse}
        aria-controls="labels_collapse_div"
        style={{ cursor: "pointer", display: "block" }}
        onClick={() => {
          setDatasetCollapse(!datasetCollapse);
          setCollapsed(!collapsed);
        }}
      >
        <span
          style={{ display: "inline", fontSize: "24px", fontWeight: "bold" }}
        >
          Labels ({l.length})
        </span>
        <span>
          {collapsed && (
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
          )}
          {collapsed == false && (
            <span style={{ fontSize: "30px", marginLeft: "15px" }}>-</span>
          )}
        </span>
      </span>

      <Collapse in={datasetCollapse}>
        <div id="labels_collapse_div">
          {l.map((x, index) => {
            return (
              <>
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
                  style={{
                    maxWidth: "400px",
                    display: "inline",
                    marginBottom: "10px",
                  }}
                ></DebounceInput>
                <span
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  onClick={() => {
                    //if no labels, remove all datasets
                    if (l.length == 1) {
                      const q = [...l];
                      q.splice(index, 1);
                      sl(q);
                      sd([]);
                    } else {
                      const q = [...l];
                      q.splice(index, 1);
                      sl(q);
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-x-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </>
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
    </div>
  );
};
export default LabelCollapse;
