import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import {useHistory} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import {
    Button, 
    Typography,
    Grid,
    Divider,
    TextField,
    Link

} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    riyadhImage:{
        
    },
    imageBody:{
        textAlign:"center"
    },
    root:{
        margin:50,
        marginLeft:"10%",
        marginRight:"10%",
        display:"flex"
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
    contactButton:{
        borderRadius:100,
        width:70,
        height:70,
        backgroundColor:"#A6D8F2"
    }
}))
function About(){
    const classes = useStyles();
    const history = useHistory();
    const goContact = () =>{
        history.push("/contact")
    }
    const { t } = useTranslation();
    return (
        <div>
            
            <div className = {classes.root}>
                <Grid container xs = {12} spacing = {10}>
                    <Grid item={true} xs = {12} sm = {6}>
                        <div className = {classes.imageBody}>
                            <img src = "/images/Riyadh image .png" className = {classes.riyadhImage}></img>
                        </div>
                    </Grid>
                    <Grid item={true} xs = {12} sm = {6}>
                        <Typography variant="h4" gutterBottom style = {{fontWeight:"bolder", marginTop:20,}}>
                            {t("about_us")}
                        </Typography>
                        <div style = {{width:250, marginLeft:30,marginTop:20, marginBottom:50,}}> 
                            <Typography variant="body1" gutterBottom style = {{ marginTop:20,}}>
                                {t("about_us_description")}
                            </Typography>
                        </div>
                        
                        
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}
export default About;
