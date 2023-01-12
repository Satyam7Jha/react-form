import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Status from "./components/Status";
import PersonalDetails from "./components/people/PersonalDetails";
import BusinessDetails from "./components/business/BusinessDetails";
import FormType from "./components/FormType";
import Output from "./components/Output";

const App = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    lastName: "",
    email: "",
    pNumber: "",
    countryDropDown: "",
    currency: "INR",
    bankCountry: "India",
    bankDetailsFormat: "India Local",
    IFSCcode: "",
    accNumber: "",
    country: "",
    city: "",
    postalCode: "",
    address: "",
    businessType: "",
  });

  const [formType, setFormType] = React.useState("Personal");
  const [level, setLevel] = React.useState(1);

  const handleReset = () => {
    setFormData({
      FirstName: "",
      lastName: "",
      email: "",
      pNumber: "",
      countryDropDown: "",
      currency: "",
      bankCountry: "India",
      bankDetailsFormat: "India Local",
      IFSCcode: "",
      accNumber: "",
      country: "",
      city: "",
      postalCode: "",
      address: "",
      businessType: "",
    });
    setFormType("Personal");
    setLevel(1);
  };

  return (
    <div className="main">
      <div className="form-container">
        {formType !== "Output" && <Status level={level} />}

        {level == 1 && formType !== "Output" && (
          <FormType setFormType={setFormType} formType={formType} />
        )}
        {formType == "Personal" && (
          <PersonalDetails
            formData={formData}
            setLevel={setLevel}
            setFormData={setFormData}
            setFormType={setFormType}
            level={level}
          />
        )}
        {formType == "Business" && (
          <BusinessDetails
            formData={formData}
            setLevel={setLevel}
            level={level}
          />
        )}

        {formType == "Output" && (
          <React.Fragment>
            <Output data={formData} />
            <button id="next" onClick={handleReset}>
              Reset
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default App;
