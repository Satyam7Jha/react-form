import React from "react";
import "./component.css";
export default function CustomInput({
  placerHolder,
  key_,
  formData,
  setFunction,
  error,
}) {
  const handleChange = (e, key_, formData) => {
    let temp = formData;
    temp[key_] = e.target.value;
    setFunction(temp);
    console.log(formData);
  };

  return (
    <div
      className="input-container"
      style={{ borderColor: error == true ? "red" : "" }}
    >
      <input
        required
        type="text"
        class="input-text"
        defaultValue={formData[key_]}
        placeholder={placerHolder}
        onChange={(e) => handleChange(e, key_, formData)}
      />
    </div>
  );
}
