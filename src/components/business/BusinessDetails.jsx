import React from "react";
import CustomInput from "../CustomInput";

export default function BusinessDetails() {
  const valid = {
    name: false,
    email: false,
    pNumber: false,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Same As Personal
    </div>
  );
}
