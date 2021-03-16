import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
}));

const options = [
  { value: 1, label: "detail_industries_1" },
  { value: 2, label: "detail_industries_2" },
  { value: 3, label: "detail_industries_3" },
  { value: 4, label: "detail_industries_4" },
  { value: 5, label: "detail_industries_5" },
  { value: 6, label: "detail_industries_6" },
  { value: 7, label: "detail_industries_7" },
  { value: 8, label: "detail_industries_8" },
  { value: 9, label: "detail_industries_9" },
  { value: 10, label: "detail_industries_10" },
  { value: 11, label: "detail_industries_11" },
  { value: 12, label: "detail_industries_12" },
  { value: 13, label: "detail_industries_13" },
  { value: 14, label: "detail_industries_14" },
  { value: 15, label: "detail_industries_15" },
  { value: 16, label: "detail_industries_16" },
  { value: 17, label: "detail_industries_17" },
  { value: 18, label: "detail_industries_18" },
  { value: 19, label: "detail_industries_19" },
  { value: 20, label: "detail_industries_20" },
  { value: 22, label: "detail_industries_22" },
  { value: 23, label: "detail_industries_23" },
  { value: 24, label: "detail_industries_24" },
  { value: 25, label: "detail_industries_25" },
  { value: 26, label: "detail_industries_26" },
  { value: 27, label: "detail_industries_27" },
  { value: 28, label: "detail_industries_28" },
  { value: 29, label: "detail_industries_29" },
  { value: 30, label: "detail_industries_30" },
  { value: 31, label: "detail_industries_31" },
  { value: 32, label: "detail_industries_32" },
  { value: 33, label: "detail_industries_33" },
  { value: 34, label: "detail_industries_34" },
  { value: 35, label: "detail_industries_35" },
  { value: 36, label: "detail_industries_36" },
  { value: 37, label: "detail_industries_37" },
  { value: 38, label: "detail_industries_38" },
  { value: 39, label: "detail_industries_39" },
  { value: 40, label: "detail_industries_40" },
  { value: 41, label: "detail_industries_41" },
];

// const imageSelect = [
//     {value:1, label:"Yes, allow designers to recommend stock images"},
//     {value:2, label:"No, I will provide my own images"},
//     {value:3, label:"I'm not sure"},
// ]
function Detail(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [file, setFile] = useState([]);
  const [productSummary, setProductSummary] = useState("");

  const [formData, setFormData] = useState({
    detail_org_name: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    detail_org_description: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    detail_content_description: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    detail_other_header: {
      value: "",
      validate: true,
      errorMsg: "",
    },
    detail_industry_industries: options[0],
  });

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    // setToUpload(u);
    // if(s.length<8)setPlusFade("showPlus")
  }
  function handlePlusImage() {
    document.getElementById("fileForm").click();
  }
  function uploadSingleFile(e) {
    if (e.target.files[0] && file.length <= 8) {
      setFile([...file, URL.createObjectURL(e.target.files[0])]);
      // setToUpload([...toUpload, e.target.files[0]]);
      // if(file.length==7) setPlusFade("hidePlus")
    }
    return;
  }
  async function handleProduct(e) {
    setProductSummary(e.target.value);
  }

  function onChange(keyName, value) {
    let tempFormData = formData;
    tempFormData[keyName] = {
      value: value,
      validate: value.length > 0 ? true : false,
      errorMsg: value.length > 0 ? "" : "Required Field",
    };
    setFormData({
      ...tempFormData,
    });
  }

  return (
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
            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder", marginTop: 20 }}
            >
              {t(props.id)}
            </Typography>
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
              {t("detail_back_info")}
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={8}>
            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder", marginTop: 20 }}
            >
              {t("detail_org_name")}
            </Typography>
            <TextField
              id="outlined-basic"
              fullWidth
              label={t("detail_product_input")}
              variant="outlined"
              style={{ marginTop: 10 }}
              error={!formData.detail_org_name.validate}
              value={formData.detail_org_name.value}
              helperText={formData.detail_org_name.errorMsg}
              onChange={(e) => onChange("detail_org_name", e.target.value)}
            />
            <Typography variant="body2" gutterBottom style={{ marginTop: 10 }}>
              {t("detail_org_example")}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder", marginTop: 20 }}
            >
              {t("detail_org_description")}
            </Typography>
            <TextField
              style={{ marginTop: 10 }}
              id="outlined-multiline-static"
              fullWidth
              label={t("detail_org_description")}
              multiline
              rows={4}
              variant="outlined"
              value={formData.detail_org_description.value}
              helperText={formData.detail_org_description.errorMsg}
              onChange={(e) =>
                onChange("detail_org_description", e.target.value)
              }
            />

            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder", marginTop: 20 }}
            >
              {t("detail_industry_select")}
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                {t("detail_industry_industries")}
              </InputLabel>
              <Select
                native
                label={t("detail_industry_industries")}
                fullWidth
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
                value={formData.detail_industry_industries}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    detail_industry_industries: e.target.value,
                  });
                }}
              >
                {options.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {t(item.label)}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
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
              {t("detail_content_detail")}
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={8}>
            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder", marginTop: 20 }}
            >
              {t("detail_content_description")}
            </Typography>
            <TextField
              style={{ marginTop: 10 }}
              id="outlined-multiline-static"
              fullWidth
              label={t("detail_content_desc_input")}
              multiline
              rows={4}
              variant="outlined"
              value={formData.detail_content_description.value}
              helperText={formData.detail_content_description.errorMsg}
              onChange={(e) =>
                onChange("detail_content_description", e.target.value)
              }
            />
            <Typography variant="body2" gutterBottom style={{ marginTop: 10 }}>
              {t("detail_content_example")}
            </Typography>
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
              style={{ fontWeight: "bolder" }}
            >
              {t("detail_other_header")}
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={8}>
            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder" }}
            >
              {t("detail_other_question")}
            </Typography>
            <TextField
              style={{ marginTop: 10 }}
              id="outlined-multiline-static"
              fullWidth
              label={t("detail_content_desc_input")}
              multiline
              rows={4}
              variant="outlined"
              value={formData.detail_other_header.value}
              helperText={formData.detail_other_header.errorMsg}
              onChange={(e) => onChange("detail_other_header", e.target.value)}
            />
            {/* <Typography variant="body1" gutterBottom  style = {{fontWeight:"bolder", marginTop:20,}}>
                            Allow the use of stock images in your contest? 
                        </Typography> 
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Select</InputLabel>
                            <Select
                            native
                            label="Select"
                            fullWidth
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                            >
                            {imageSelect.map((item, index)=>{
                                return <option key = {index} value={item.value}>{item.label}</option>
                            })}
                            </Select>
                        </FormControl>
                        <Typography variant="body2" gutterBottom style = {{marginTop:20}}>
                           There may be additional costs for designs that use stock images. Designers will include details for stock iamges, so you can buy stock at the end of contest. <Link>Learn more about stock</Link>
                        </Typography>  */}

            <Typography
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bolder", marginTop: 20 }}
            >
              {t("detail_other_image_header")}
            </Typography>

            <Grid container style={{ marginTop: 10, marginBottom: 10 }}>
              {file.length > 0 &&
                file.map((item, index) => {
                  return (
                    <Grid
                      item={true}
                      key={item}
                      xs={12}
                      md={3}
                      className={classes.imageBody}
                    >
                      <img src={item} alt="" className={classes.images} />
                      <CancelIcon
                        onClick={() => deleteFile(index)}
                        className={classes.canelIcon}
                      />
                    </Grid>
                  );
                })}
              <Grid item={true} xs={12} md={3}>
                <div
                  className={classes.plusImageButton}
                  onClick={handlePlusImage}
                >
                  <AddIcon style={{ fontSize: 30 }} />
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontWeight: "bolder", marginTop: 10, padding: 10 }}
                  >
                    {t("detail_other_image_picker")}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <input
              id="fileForm"
              type="file"
              // disabled={file.length === 8}
              className="form-control"
              style={{ display: "none" }}
              onChange={uploadSingleFile}
            />

            <Typography variant="body2" gutterBottom style={{ marginTop: 10 }}>
              {t("detail_other_image_example")}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Detail;
