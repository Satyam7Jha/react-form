export const validateName = (name) => {
  return String(name)
    .toLowerCase()
    .match(/^[a-zA-Z ]{3,16}$/);
};

export const validateLastName = (name) => {
  return String(name)
    .toLowerCase()
    .match(/^[a-zA-Z ]{0,16}$/);
};

export const validatePhoneNum = (num) => {
  return String(num)
    .toLowerCase()
    .match(/^((\\+91-?)|0)?[0-9]{10}$/);
};
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateIFSC = (ifsc_Code) => {
  let regex = new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/);

  if (ifsc_Code == null) {
    return "false";
  }

  if (regex.test(ifsc_Code) == true) {
    return "true";
  } else {
    return "false";
  }
};

export const handleNextClick = (
  e,
  formData,
  setError,
  error,
  level,
  setLevel
) => {
  e.preventDefault();

  let flag = false;

  let tempErr = {
    email: false,
    pNumber: false,
    FirstName: false,
    lastName: false,
    accNumber: false,
    IFSC: false,
    country: false,
    city: false,
    pinCode: false,
  };

  if (validateLastName(formData["FirstName"]) == null) {
    tempErr = { ...tempErr, FirstName: true };
    flag = true;
  } else {
    tempErr = { ...tempErr, FirstName: false };
  }
  if (validateLastName(formData["lastName"]) == null) {
    tempErr = { ...tempErr, lastName: true };
    flag = true;
  } else {
    tempErr = { ...tempErr, lastName: false };
  }

  if (validatePhoneNum(formData["pNumber"]) == null) {
    tempErr = { ...tempErr, pNumber: true };

    flag = true;
  } else {
    setError({ ...error, pNumber: false });
  }

  if (
    validateIFSC(formData["IFSCcode"]) == "false" &&
    formData["IFSCcode"] !== ""
  ) {
    tempErr = { ...tempErr, IFSC: true };

    flag = true;
  } else {
    setError({ ...error, IFSC: false });
  }

  if (
    validatePhoneNum(formData["accNumber"]) == null &&
    formData["accNumber"] != ""
  ) {
    tempErr = { ...tempErr, accNumber: true };
    flag = true;
  } else {
    setError({ ...error, accNumber: false });
  }
  if (validateEmail(formData["email"]) == null) {
    tempErr = { ...tempErr, email: true };
    flag = true;
  } else {
    setError({ ...error, email: false });
  }

  setError(tempErr);
  if (flag) return;

  setLevel(1 + level);
};

export const handlePreviousClick = (e, level, setLevel) => {
  e.preventDefault();
  setLevel(level - 1);
};
export const handleSubmit = (e, formData, setFormType, setError, error) => {
  e.preventDefault();
  let tempErr = {
    city: false,
    country: false,
  };
  let flag = false;
  if (validateName(formData["country"]) == null && formData["country"] !== "") {
    tempErr = { ...tempErr, country: true };
    flag = true;
  } else {
    tempErr = { ...tempErr, country: false };
  }

  if (validateName(formData["city"]) == null) {
    tempErr = { ...tempErr, city: true };
    flag = true;
  } else {
    tempErr = { ...tempErr, city: false };
  }
  setError({ ...error, ...tempErr });
  if (flag) return;
  setFormType("Output");
};
