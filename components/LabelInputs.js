import React from "react";
import { DebounceInput } from "react-debounce-input";

const LabelInputs = ({ d, l, sd, i1 }) => {
  return (
    <div>
      {l.map((y, index2) => {
        return (
          <div key={index2}>
            <label htmlFor={d[i1].label + "_" + y}>{y}</label>
            <DebounceInput
              onChange={(x) => {
                if (isNaN(x.target.value) === false) {
                  const v = [...d];
                  v[i1].data[index2] = x.target.value;
                  sd(v);
                }
              }}
              debounceTimeout={100}
              className={"form-control"}
              style={{ maxWidth: "100px", display: "inline" }}
              maxLength={20}
              id={d[i1].label + "_" + y}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LabelInputs;
