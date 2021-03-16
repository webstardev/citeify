
import React from "react"
import { useTranslation } from 'react-i18next';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import {Button, 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    Typography,
    ListItemIcon,
    Stepper,
    Step,
    StepLabel,
    Grid,
    StepConnector
} from '@material-ui/core';
import clsx from 'clsx';
import {useHistory} from "react-router-dom";
import Check from '@material-ui/icons/Check';
import Detail from "./product/detail";
import Payment from "./product/payment"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:30,
      flexGrow: 1,
      paddingRight:"13%",
      paddingLeft:"13%",
      
    },
    button: {
        marginRight: theme.spacing(1),
    },
    bottomButton:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        width:"100%",
        boxShadow: "0 10px 50px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        padding:"15px 13% 15px 13%",
        alignItems:"center"
    },
    
}));
const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        borderColor: '#0071e3 ',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#0071e3 ',
      },
    },
    line: {
      borderColor: '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
})(StepConnector);
const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#0071e3 ',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#0071e3',
      zIndex: 1,
      fontSize: 18,
    },
    images:{
    width:"100%",
    height:"100%",
    objectFit:"cover"
  },
  imagePlus:{
    width:"60%",
    height:"100%",
  },
  imageBody:{
    padding:3,
    paddingRight:5
  },
});
function Category (props){
  const { t } = useTranslation();
  const handle  = props.location.search;
  const idNum = new URLSearchParams(handle).get('category');
  var id = "";
  switch(idNum*1) {
    case 1:
      id = "category_most_subheader";
      break;
    case 2:
      id = "category_logo_design";
      break;
    case 3:
      id = "category_product_pack";
      break;
    case 4:
      id = "Hotel Identity packaging";
      break;
    case 5:
      id = "category_rest_header";
      break;
    case 6:
      id = "category_social_header";
      break;
    case 7:
      id = "category_apart_header";
      break;
  }
  const history  = useHistory();
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  function getSteps() {
      return ['Select campaign settings', 'Create an ad group'];
    }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

    return (
        <div>
            <div className = {classes.root}>
                <Typography variant="h4" gutterBottom style = {{fontWeight:"bolder"}}>
                    {t("brief_design_header")}
                </Typography>
                <Typography variant="body1" gutterBottom >
                    {t("brief_design_summary")}
                </Typography>
                <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                    <Step>
                        <StepLabel StepIconComponent={QontoStepIcon}>{t("brief_your_design")}</StepLabel>
                    </Step>
                    {/* <Step>
                        <StepLabel StepIconComponent={QontoStepIcon}>Packages & Upgrades</StepLabel>
                    </Step> */}
                    <Step>
                        <StepLabel StepIconComponent={QontoStepIcon}>{t("brief_your_payment")}</StepLabel>
                    </Step>
                </Stepper>
                <div>
                    {activeStep==0?<div><Detail id = {id}/></div>:activeStep==1?<div><Payment id = {id}/></div>:null}
                </div>
            </div>
           
            <div className = {classes.bottomButton}>
                <div style = {{justifyContent:"flex-start"}}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <Check />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={t("brief_footer_top_text")} secondary={t("brief_footer_bottom_text")}/>
                </ListItem>
                </div>
                <div style = {{justifyContent:"flex-end"}}>
                    {activeStep === steps.length ? (
                    <div>
                        <Button onClick={handleReset} variant="contained" style = {{backgroundColor:"#A6D8F2"}} className={classes.button}>
                        {t("brief_button_reset")}
                        </Button>
                    </div>
                    ) : (
                    <div>
                    
                        <div>
                        
                        <Button
                            variant="contained"
                            style = {{backgroundColor:"#A6D8F2"}}
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? t("brief_button_finish") : t("brief_button_continue")}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}
function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
        className={clsx(classes.root, {
            [classes.active]: active,
        })}
        >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}
export default Category;