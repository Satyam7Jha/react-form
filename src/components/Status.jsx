import React from "react";
import "./component.css";
export default function Status({ level }) {
  return (
    <div className="statusConatiner">
      <div className="icon-container fixed-width">
        <div
          className="circle"
          style={{ backgroundColor: level > 0 ? "#3e51b4" : "grey" }}
        >
          {level <= 1 && 1}
          {level > 1 && (
            <img
              style={{ width: "30px", height: "30px" }}
              src={require("../assets/check.png")}
            />
          )}
        </div>
        <div
          className="marginLine"
          style={{ borderColor: level > 1 ? "#3e51b4" : "grey" }}
        ></div>
        <div
          className="circle"
          style={{ backgroundColor: level > 1 ? "#3e51b4" : "grey" }}
        >
          {level <= 2 && 2}
          {level > 2 && (
            <img
              style={{ width: "30px", height: "30px" }}
              src={require("../assets/check.png")}
            />
          )}
        </div>
        <div
          className="marginLine"
          style={{ borderBlockColor: level > 2 ? "#3e51b4" : "grey" }}
        ></div>
        <div
          className="circle"
          style={{ backgroundColor: level > 2 ? "#3e51b4" : "grey" }}
        >
          3
        </div>
      </div>
      <div className="icon-container text-container">
        <div>Beneficiary</div>
        <div>Bank Details </div>
        <div>Address</div>
      </div>
    </div>
  );
}
