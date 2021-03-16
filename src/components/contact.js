import React, {useState} from "react"
import { useTranslation } from 'react-i18next';
import {useHistory} from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles, withStyles  } from '@material-ui/core/styles';

import {
    Button, 
    Typography,
    Grid,
    Divider,
    TextField,
    Link

} from '@material-ui/core';
import Swal from 'sweetalert2'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    riyadhImage:{
        
    },
    imageBody:{
        textAlign:"center"
    },
    gridOne:{
        marginTop:50,
        paddingLeft:"10%",
        paddingRight:"10%",
    },
    root1:{
        backgroundColor: "#f3f2f0",
        backgroundImage: "linear-gradient(#fff,#f3f2f0)"
    }
   
}))
function About(){
    const classes = useStyles();
    const { t } = useTranslation();
    const history = useHistory();
    async function sendEmail(){
        await axios.get('http://citeify.com/citeify_back/api/sendemail').then((res)=>
        {
          console.log(res.data['message']);
          Swal.fire({
            title:  res.data['message'],
            text: "Thanks",
            type: 'success',
            
          });
        console.log(res)
        });
    
    }
    
    return (
        <div>
            
            <div className = {classes.root1}>
                <div className = {classes.gridOne}>
                    <Grid container xs = {12} spacing = {10} >
                        <Grid item={true} xs = {12} sm = {6}>
                            <Typography variant="h4" gutterBottom style = {{fontWeight:"bolder", marginTop:20,}}>
                                {t("contact_help_header")}
                            </Typography>
                            <div style = {{width:250, marginLeft:30,marginTop:20, marginBottom:50,}}> 
                                <Typography variant="body1" gutterBottom style = {{ marginTop:20,}}>
                                    {t("contact_help_question")}
                                </Typography>
                                <Typography variant="h6" onClick = {sendEmail} gutterBottom style = {{cursor:"pointer",fontWeight:"bolder", marginTop:20, alignItems:"center",}}>
                                    {t("contact_help_submit")}<ArrowForwardIcon/>
                                </Typography>
                            </div>
                            
                            
                        </Grid>
                        <Grid item={true} xs = {12} sm = {6}></Grid>
                        
                    </Grid>
                </div>
                
            </div>
            <div className = {classes.root2}>
                <Grid container xs = {12} spacing = {10} className = {classes.gridOne}>
                    <Grid item={true} xs = {12} sm = {6}>
                        <Typography variant="h4" gutterBottom style = {{fontWeight:"bolder", marginTop:20,}}>
                            {t("contact_office_location")}
                        </Typography>
                        <div style = {{width:250, marginLeft:30,marginTop:20, }}> 
                            
                            <Typography variant="h5" gutterBottom style = {{ marginTop:20,}}>
                                <LocationOnIcon style = {{fontSize:30}}/> {t("contact_office_country")}
                            </Typography>
                            
                        </div>
                        <div style = {{width:250, marginLeft:60, marginBottom:50,}}> 
                            
                            <Typography variant="body2" gutterBottom style = {{ marginBottom:20,}}>
                                {t("contact_office_province")}
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                Citeify
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                PO Box 34257
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                {t("contact_office_country")}, DH 94609
                            </Typography>
                        </div>
                        
                        
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}
export default About;
