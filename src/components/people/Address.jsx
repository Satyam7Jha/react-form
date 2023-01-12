import React from "react";
import { handlePreviousClick, handleSubmit } from "../utils";
import CustomInput from "../CustomInput";
export default function Address({
  formData,
  setError,
  error,
  level,
  setLevel,
  setFormData,
  setFormType
}) {
  return (
    <form className="page-1">
      <CustomInput
        placerHolder={"Country"}
        key_={"country"}
        formData={formData}
        setFunction={setFormData}
      />
      <div id="errorMessage">
        {error["country"] == false
          ? ""
          : "country len [3-16] && no special char."}
      </div>
      <CustomInput
        placerHolder={"City"}
        key_={"city"}
        formData={formData}
        setFunction={setFormData}
      />
      <div id="errorMessage">
        {error["city"] == false ? "" : "city len [3-16] && no special char."}
      </div>
      <CustomInput
        placerHolder={"Post Code"}
        key_={"postalCode"}
        formData={formData}
        setFunction={setFormData}
      />
      <CustomInput
        placerHolder={"Phone Number"}
        key_={"pNumber"}
        formData={formData}
        setFunction={setFormData}
      />
      <div style={{ width: "100%" }}>
        <button
          onClick={(e) => handlePreviousClick(e, level, setLevel)}
          id="previous"
        >
          Previous
        </button>
        <button
          id="next"
          onClick={(e) =>
            handleSubmit(e, formData, setFormType, setError, error)
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
