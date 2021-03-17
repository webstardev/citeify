import React, {
  useState,
  setState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useTranslation } from "react-i18next";
import isEmail from "validator/lib/isEmail";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Grid,
  Divider,
  TextField,
  Link,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import countryList from "react-select-country-list";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { validate } from "../../utils/validator";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
  eachGrid: {
    marginBottom: 20,
  },
  formControl: {
    width: "100%",
  },
  images: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    height: 140,
  },
  imagePlus: {
    width: "60%",
    height: "100%",
  },
  imageBody: {
    padding: 3,
    paddingRight: 5,
  },
  plusImageButton: {
    borderStyle: "dotted",
    borderWidth: 2,
    width: "100%",
    height: "100%",
    height: 140,
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  canelIcon: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -13,
  },
  paymentInfo: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const Payment = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const countries = countryList().getData();
  const [listCountry, setListCountry] = useState(countries);
  const classes = useStyles();
  const [file, setFile] = useState([]);
  const [productSummary, setProductSummary] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    email: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    payment_address: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    payment_city: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    payment_zip_code: {
      value: "",
      validate: true,
      errorMsg: "",
    },
  });

  const deleteFile = (e) => {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    // setToUpload(u);
    // if(s.length<8)setPlusFade("showPlus")
  };

  const handlePlusImage = () => {
    document.getElementById("fileForm").click();
  };

  const uploadSingleFile = (e) => {
    if (e.target.files[0] && file.length <= 8) {
      setFile([...file, URL.createObjectURL(e.target.files[0])]);
      // setToUpload([...toUpload, e.target.files[0]]);
      // if(file.length==7) setPlusFade("hidePlus")
    }
    return;
  };

  const handleProduct = async (e) => {
    setProductSummary(e.target.value);
  };

  const handlePay = async (e) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(error, paymentMethod);
  };

  const onChange = (keyName, value) => {
    let tempFormData = formData;
    tempFormData[keyName] = {
      value: value,
      ...validate(keyName === "email" ? "email" : "string", value),
    };
    setFormData({
      ...tempFormData,
    });
  };

  const checkFormValidate = () => {
    setFormSubmitted(true);
    let bValidate = true;

    const formDataTemp = { ...formData };
    Object.keys(formData).map((itemKey) => {
      const item = formData[itemKey];
      debugger;
      const validateItem = validate(
        itemKey === "email" ? "email" : "string",
        item.value.toString()
      );

      if (bValidate) bValidate = validateItem.validate;

      formDataTemp[itemKey] = {
        value: item.value,
        ...validateItem,
      };
    });

    setFormData({
      ...formDataTemp,
    });
    return bValidate;
  };

  useImperativeHandle(ref, () => ({
    checkValidate() {
      return checkFormValidate();
    },
  }));

  const handleSubmit = (event) => {
    debugger;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <div style={{ marginTop: 20, marginBottom: 10 }}>
          <Grid container xs={12} className={classes.eachGrid}>
            <Grid item={true} xs={12} sm={4}>
              <Typography
                variant="h5"
                gutterBottom
                style={{ fontWeight: "bolder", marginTop: 20 }}
              >
                {t("detail_product_summary")}
              </Typography>
            </Grid>
            <Grid item={true} xs={12} sm={8}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    fontWeight: "bolder",
                    marginTop: 20,
                    justifyContent: "flex-start",
                  }}
                >
                  {t(props.id)}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    fontWeight: "bolder",
                    marginTop: 20,
                    justifyContent: "flex-end",
                  }}
                >
                  {t("payment_tax")}
                </Typography>
              </div>
              <Divider />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    fontWeight: "bolder",
                    marginTop: 20,
                    justifyContent: "flex-start",
                  }}
                >
                  {t("payment_total")}
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    fontWeight: "bolder",
                    marginTop: 20,
                    justifyContent: "flex-end",
                  }}
                >
                  $ 335USD
                </Typography>
              </div>

              {/* <TextField id="outlined-basic" fullWidth label="Input the product summary" variant="outlined" style = {{marginTop:10}} onChange = {handleProduct} value = {productSummary}/> */}
              {/* <Typography variant="body2" gutterBottom style = {{marginTop:10}}>
                            We'll hold your data according to our <Link>Privacy Policy</Link>
                        </Typography>  */}
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div style={{ marginTop: 20, marginBottom: 10 }}>
          <Grid container xs={12} className={classes.eachGrid}>
            <Grid item={true} xs={12} sm={4}>
              <Typography
                variant="h5"
                gutterBottom
                style={{ fontWeight: "bolder", marginTop: 20 }}
              >
                {t("payment_contact_detail")}
              </Typography>
            </Grid>
            <Grid item={true} xs={12} sm={8}>
              <Grid container xs={12} spacing={5}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    {t("payment_full_name")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: 10 }}
                    value={formData.name.value}
                    onChange={(e) => onChange("name", e.target.value)}
                    error={formSubmitted && !formData.name.validate}
                    helperText={formSubmitted && formData.name.errorMsg}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    {t("payment_email")}
                  </Typography>
                  <TextField
                    type="email"
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: 10 }}
                    value={formData.email.value}
                    onChange={(e) => onChange("email", e.target.value)}
                    error={formSubmitted && !formData.email.validate}
                    helperText={formSubmitted && formData.email.errorMsg}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    {t("payment_address")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: 10 }}
                    value={formData.payment_address.value}
                    onChange={(e) =>
                      onChange("payment_address", e.target.value)
                    }
                    error={formSubmitted && !formData.payment_address.validate}
                    helperText={
                      formSubmitted && formData.payment_address.errorMsg
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    {t("payment_city")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: 10 }}
                    value={formData.payment_city.value}
                    onChange={(e) => onChange("payment_city", e.target.value)}
                    error={formSubmitted && !formData.payment_city.validate}
                    helperText={formSubmitted && formData.payment_city.errorMsg}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    {t("payment_zip_code")}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: 10 }}
                    value={formData.payment_zip_code.value}
                    onChange={(e) =>
                      onChange("payment_zip_code", e.target.value)
                    }
                    error={formSubmitted && !formData.payment_zip_code.validate}
                    helperText={
                      formSubmitted && formData.payment_zip_code.errorMsg
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    Country
                  </Typography>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ marginTop: 10 }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Select
                    </InputLabel>
                    <Select
                      native
                      label="Select"
                      fullWidth
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      {listCountry.map((item, index) => {
                        return (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <div className={classes.paymentInfo}>
                <Typography variant="h6">
                  {t("payment_pay_information")}
                </Typography>
                <CardElement />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#A6D8F2" }}
                  onClick={handlePay}
                >
                  {t("payment_pay_button")} $299
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider />
      </div>
    </form>
  );
});
export default Payment;
