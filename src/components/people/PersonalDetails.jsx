import React from "react";
import CustomInput from "../CustomInput";
import { handleNextClick, handlePreviousClick, handleSubmit } from "../utils";
import Address from "./Address";
import BankDetails from "./BankDetails";
import Beneficiary from "./Beneficiary";

export default function PersonalDetails({
  formData,
  setFormData,
  setLevel,
  level,
  setFormType,
}) {
  const [error, setError] = React.useState({
    email: false,
    pNumber: false,
    FirstName: false,
    lastName: false,
    accNumber: false,
    IFSC: false,
    country: false,
    city: false,
    pinCode: false,
  });

  return (
    <div>
      {level == 1 && (
        <Beneficiary
          formData={formData}
          setError={setError}
          error={error}
          level={level}
          setLevel={setLevel}
          setFormData={setFormData}
        />
      )}

      {level == 2 && (
        <BankDetails
          formData={formData}
          setError={setError}
          error={error}
          level={level}
          setLevel={setLevel}
          setFormData={setFormData}
        />
      )}

      {level == 3 && (
        <Address
          formData={formData}
          setError={setError}
          error={error}
          level={level}
          setLevel={setLevel}
          setFormData={setFormData}
          setFormType={setFormType}
        />
      )}
    </div>
  );
}
