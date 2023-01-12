import React from "react";
import "./component.css";

export default function Output({ data }) {
  return (
    <ul>
      <h3>Form Data</h3>
      {Object.keys(data).map((item, ind) => {
        return (
          <React.Fragment>
            {data[item] != "" && (
              <li>
                {item} : {data[item]}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
