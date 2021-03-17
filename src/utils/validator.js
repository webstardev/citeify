import isEmail from "validator/es/lib/isEmail";

export const validate = (type = "string", value) => {
  let validate = {};
  switch (type) {
    case "string":
    case "required":
      if (value.length > 0) validate = { validate: true, errorMsg: "" };
      else validate = { validate: false, errorMsg: "Required Field." };
      break;
    case "email":
      if (value.length > 0) {
        if (isEmail(value)) {
          validate = { validate: true, errorMsg: "" };
        } else {
          validate = { validate: false, errorMsg: "Invalid Email" };
        }
      } else {
        validate = {
          validate: false,
          errorMsg: "Required Field.",
        };
      }
      break;
    default: {
      if (value.length > 0) validate = { validate: true, errorMsg: "" };
      else validate = { validate: false, errorMsg: "Required Field." };
      break;
    }
  }
  return validate;
};
