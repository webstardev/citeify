import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Typography,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginRight:"10%",
        marginLeft:"10%",
        padding:10,
    },
    headerText : {
        fontSize:18,
        fontWeight:"bold",
        marginLeft:5,
    },
    mainGrid : {
        paddingBottom:60,
        marginTop:20,
        paddingTop:50,
    },
    categoryBody : {
        paddingRight:"10%",
        paddingLeft:"10%",
    
        width:"100%",
        boxShadow: "0 10px 50px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
        // transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    },
    media:{
        width:"100%",
        height:220,
        minHeight:220
    },
    nameText:{
        fontStyle:"italic",
        fontFamily:"Comic Sans"
    },
    titleText:{
        color:"blue"
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
      },
    subheading:{
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
    headingSummary:{
        fontSize: theme.typography.pxToRem(16),
        textAlign:"center",
        fontWeight: theme.typography.fontWeightRegular,
        marginBottom:10,
    },
    divider:{
        marginTop:10,
        marginBottom:10
    },
    paddingAccordian:{
        marginTop:10,
        marginBottom:10
    }
    
  }));
export default function Terms (){
    const { t } = useTranslation();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
        <div className = {classes.root}>
            <Typography variant="h6" gutterBottom >
                {t("term_header_title")} : Jan 23, 2021
            </Typography>

            <Typography variant="body1" gutterBottom >
               {t("term_header_description")}
            </Typography>

            <Typography variant="body1" gutterBottom style = {{fontWeight:"bold"}}>
                {t("term_header_description_bottom")}
            </Typography>
            <Divider className = {classes.divider}/>
         
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>1. {t("term_one_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>1.1 {t("term_one_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                                {t("term_one_one_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>1.2 {t("term_one_two")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                                {t("term_one_two_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>2. {t("term_two_header")}</Typography>
                
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    
                    <Typography className = {classes.headingSummary}>{t("term_two_description")}</Typography>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>2.1 {t("term_two_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                             {t("term_two_one_content")}  
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>2.2 {t("term_two_two")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_two_two_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>2.3 {t("term_two_three")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                             {t("term_two_three_content")} 
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>3. {t("term_three_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>3.1 {t("term_three_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                           {t("term_three_one_content")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_one_content_a")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_one_content_b")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                                {t("term_three_one_content_c")}
                            </Typography>
                            
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>3.2 {t("term_three_two")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_description")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_a")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_b")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_c")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_d")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_e")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_three_two_bottom")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>4. {t("term_four_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>4.1 {t("term_four_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_four_one_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>6. {t("term_six_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    <Typography variant = "body1" gutterBottom>
                    {t("term_six_content")}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>7. {t("term_seven_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>7.1 {t("term_seven_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_seven_one_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>7.2 {t("term_seven_two")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_seven_two_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>8. {t("term_eight_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                <Typography className={classes.headingSummary}>{t("term_eight_subheader")}</Typography>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>8.1 {t("term_eight_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_eight_one_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                  
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>9. {t("term_nine_header")}</Typography>
                </AccordionSummary>
                <AccordionDetails style = {{display:"block"}}>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>9.1 {t("term_nine_one")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_nine_content_a")}
                            </Typography>
                            <Typography variant = "h6" gutterBottom className = {classes.headingSummary}>
                            {t("term_nine_content_b")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom>
                           {t("term_nine_content_c")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>9.2 {t("term_nine_two")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_nine_two_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>9.3 {t("term_nine_three")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom>
                            {t("term_nine_three_content")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.subheading}>9.4 {t("term_nine_four")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style = {{display:"block"}}>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            +966 544355542 
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            Contact@citeify.com 
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            {t("term_nine_four_province")}
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            Citeify
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            PO Box 34257
                            </Typography>
                            <Typography variant = "body1" gutterBottom className = {classes.paddingAccordian}>
                            Saudi Arabia, DH 94609
                            </Typography>
                        </AccordionDetails>
                    </Accordion>    
                </AccordionDetails>
            </Accordion>
            
        </div>
    )
}