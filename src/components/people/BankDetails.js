import React from "react";
import CustomInput from "../CustomInput";
import { handlePreviousClick, handleNextClick } from "../utils";

export default function BankDetails({
  formData,
  setError,
  error,
  level,
  setLevel,
  setFormData,
}) {
  return (
    <form
      className="page-1"
      onSubmit={(e) =>
        handleNextClick(e, formData, setError, error, level, setLevel)
      }
    >
      <div
        style={{
          width: "90%",
          color: "gray",
          paddingBottom: "7px",
        }}
      >
        <div style={{ fontSize: "10px" }}>country</div>
        <select
          onChange={(e) => {
            setFormData({
              ...formData,
              bankCountry: e.target.value,
              currency: e.target.value === "India" ? "INR" : "USD",
              bankDetailsFormat:
                e.target.value === "India" ? "India Local" : "USA Local",
            });
          }}
          defaultValue={formData["bankCountry"]}
          style={{
            backgroundColor: "white",
            borderBottom: "2px solid grey",
          }}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <div
        style={{
          borderBottom: "2px solid grey",
          width: "90%",
          paddingBottom: "2px",
          color: "gray",
          marginTop: "15px",
        }}
      >
        <div style={{ fontSize: "10px" }}>Currency</div>
        <div id="currency">
          {formData["bankCountry"] == "India" ? "INR" : "USD"}
        </div>
      </div>

      <div
        style={{
          width: "90%",
          paddingBottom: "2px",
          marginTop: "10px",
          color: "gray",
          marginTop: "12px",
          marginBottom: "px",
        }}
      >
        <div style={{ fontSize: "10px" }}>Bank details format</div>

        {formData["bankCountry"] === "India" && <div>{"India Local"}</div>}
        {formData["bankCountry"] !== "India" && (
          <div
            defaultValue={formData["USA Local"]}
            onChange={(e) =>
              setFormData({
                ...formData,
                bankDetailsFormat: e.target.value,
              })
            }
          >
            <div id="currency">
              <input
                type="radio"
                id="USA Local"
                name="bankType"
                value="USA Local"
                checked={
                  formData["bankDetailsFormat"] === "USA Local" ? "checked" : ""
                }
              />
              {"USA Local"}
            </div>
            <div id="currency">
              <input
                type="radio"
                id="SWIFT"
                name="bankType"
                value="SWIFT"
                checked={
                  formData["bankDetailsFormat"] === "SWIFT" ? "checked" : ""
                }
              />
              {"SWIFT"}
            </div>
          </div>
        )}
      </div>

      <CustomInput
        placerHolder={"IFSC code"}
        key_={"IFSCcode"}
        formData={formData}
        setFunction={setFormData}
        error={error["IFSC"]}
      />
      <div id="errorMessage">
        {error["IFSC"] == false ? "" : "Not valid IFSC code."}
      </div>
      <CustomInput
        placerHolder={"Account number"}
        key_={"accNumber"}
        formData={formData}
        setFunction={setFormData}
        error={error["accNumber"]}
      />
      <div id="errorMessage">
        {error["accNumber"] == false ? "" : "Account Number must be 10 degit."}
      </div>
      <div style={{ width: "100%" }}>
        <button
          onClick={(e) => handlePreviousClick(e, level, setLevel)}
          id="previous"
        >
          Previous
        </button>
        <button type="submit" id="next">
          Next
        </button>
      </div>
    </form>
  );
}
