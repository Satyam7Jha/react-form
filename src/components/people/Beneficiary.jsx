import React from "react";
import CustomInput from "../CustomInput";
import { handleNextClick } from "../utils";

export default function Beneficiary({
  formData,
  setError,
  error,
  level,
  setLevel,
  setFormData,
}) {
  return (
    <form
      onSubmit={(e) => {
        handleNextClick(e, formData, setError, error, level, setLevel);
      }}
      className="page-1"
    >
      <CustomInput
        placerHolder={"First name"}
        key_={"FirstName"}
        formData={formData}
        setFunction={setFormData}
        error={error["FirstName"]}
      />
      <div id="errorMessage">
        {error["FirstName"] == false
          ? ""
          : "First Name len [3-16] && no special char."}
      </div>
      <CustomInput
        placerHolder={"Last name"}
        key_={"lastName"}
        formData={formData}
        setFunction={setFormData}
      />
      <div id="errorMessage">
        {error["lastName"] == false
          ? ""
          : "Last Name len <16 && no special char."}
      </div>
      <CustomInput
        placerHolder={"Email"}
        key_={"email"}
        formData={formData}
        setFunction={setFormData}
        error={error["email"]}
      />
      <div id="errorMessage">
        {error["email"] == false ? "" : "Please enter a valid email."}
      </div>
      <CustomInput
        placerHolder={"Phone Number"}
        key_={"pNumber"}
        formData={formData}
        setFunction={setFormData}
        error={error["pNumber"]}
      />
      <div id="errorMessage">
        {error["pNumber"] == false ? "" : "Phone Number must be 10 degit."}
      </div>
      <div style={{ width: "100%" }}>
        <button type="submit" id="next">
          Next
        </button>
      </div>
    </form>
  );
}
