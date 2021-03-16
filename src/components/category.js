
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Button, 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    Typography,
    ListItemIcon
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import CheckIcon from '@material-ui/icons/Check';
import {useHistory} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingRight:"10%",
      paddingLeft:"10%",
      
    },
    popular:{
        borderLeft:"2px solid grey",
        padding:20,
        borderBottom:"2px solid grey",
        "&:hover": {
            backgroundColor:"rgba(255,255, 212,0.2)",
            border:"none",
            cursor:"pointer",
            boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
          }
    },
    logo : {
        border:"2px solid grey",
        borderRight:"none",
        padding:20,  
        "&:hover": {
            backgroundColor:"rgba(255,255, 212,0.2)",
            border:"none",
            cursor:"pointer",
            boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
          }
    },
    packaging:{
        border:"2px solid grey",
        borderRight:"none",
        padding:20,
        "&:hover": {
            backgroundColor:"rgba(255,255, 212,0.2)",
            border:"none",
            cursor:"pointer",
            boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
          }
        
    },
    hotel : {
        border:"2px solid grey",
        borderRight:"none",
        borderTop:"none",
        padding:20,
        "&:hover": {
            backgroundColor:"rgba(255,255, 212,0.2)",
            border:"none",
            cursor:"pointer",
            boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
          }
    },
    button : {
        backgroundColor:"#0063cc",
        borderRadius:30,
        fontSize:14,
        textTransform : "initial"
    },
    listView : {
        marginTop:-10,
        marginBottom:-10,
    },
    iconImage : {
        marginLeft:10,
        width:50,
        height:50,
        opacity:0.8,
    },
    saveThirty:{
        borderWidth:2,
        borderStyle:"solid",
        width:"fit-content",
        padding : 2,
        borderRadius:3,
        marginLeft:15,
        color:"#004de8",
        borderColor:"#004de8",
        paddingRight:10,
        paddingLeft:10,
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
    
        width:"100%",
        boxShadow: "0 10px 50px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        // transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    },
    sar999:{
        fontSize:15,
        marginTop:5, 
        marginLeft:10, 
        fontWeight:'bold', 
    }
  }));
const most = [
    {"text" : "category_most_logo"},
    {"text" : "category_most_card"},
    {"text" : "category_most_letter"},
    {"text" : "category_most_email"}

];
const logoDesign = [
];
const packaging = 
[
];

const hotel = [
    {"text" : "category_hotel_front"},
    {"text" : "category_hotel_menu"},
    {"text" : "category_hotel_logo"},
    {"text" : "category_hotel_packing"},


];
const retaurant = [
    {"text" : "category_hotel_front_sign"},
    {"text" : "category_hotel_menu"},
    {"text" : "category_hotel_logo"},
    {"text" : "category_hotel_packing"},
];
const social = [
    {"text" : "category_social_twitter"},
    {"text" : "category_social_insta"},
    {"text" : "category_social_linkin"},
    {"text" : "category_social_whatsapp"},
];
const brand  = [
    {"text" : "category_hotel_front"},
    {"text" : "category_hotel_logo"},
    {"text" : "category_hotel_essential"},
    {"text" : "category_hotel_packing"},
]
function Category (){
    const history  = useHistory();
    const classes = useStyles();
    async function briefPage(id){
        history.push("/brief?category=" + id)
    }
    const { t } = useTranslation();

    return (
        <div>
             <Typography variant="h6" gutterBottom style = {{marginLeft:"5%"}}>
             {t('choose_package_header')}
            </Typography>
            <div className = {classes.categoryBody}>
                <div className={classes.root}>
                
                <Grid container spacing = {2} className = {classes.mainGrid}>
                    <Grid item={true} xs={12} sm = {6} className = {classes.popular} onClick = {()=>briefPage(1)}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        > <StarIcon/> &nbsp;{t("category_most_header")}</Button>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <img src = "/images/icons/brand.png" className = {classes.iconImage} />
                                </ListItemAvatar>
                                <ListItemText primary={<div className = {classes.headerText}>{t("category_most_subheader")}</div>} secondary={<div style = {{display:"flex", marginTop:5,}}><label className = {classes.sar999}>{t("category_from_sar")}</label><div className = {classes.saveThirty}>{t("category_save")}  39%+</div></div>} >
                                    
                                </ListItemText>
                            </ListItem>
                        </List>
                        <div style = {{marginBottom:10}}>
                            <label className = {classes.sar999}>5-8 {t("category_business_day")}</label>
                        </div>
                        <Typography variant="body1" gutterBottom>
                            {t("category_most_description")}
                        </Typography>
                        <List>
                            {most.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid>
                    <Grid item={true} xs={12} sm = {3} className = {classes.logo} onClick = {()=>briefPage(2)}>
                        <img src = "/images/icons/logo-design.png" className = {classes.iconImage} />
                        <div className = {classes.headerText}>{t("category_logo_design")}</div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>{t("category_from_sar")}</label>
                        </div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>2-3 {t("category_business_day")}</label>
                        </div>
                        <Typography variant="body1" gutterBottom>
                            {t("category_logo_description")}
                        </Typography>
                        <List>
                            {logoDesign.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid>
                    <Grid item={true} xs={12} sm = {3} className = {classes.packaging} onClick = {()=>briefPage(3)}>
                        <img src = "/images/icons/package.png" className = {classes.iconImage} />
                        <div className = {classes.headerText}>{t("category_product_pack")}</div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>{t("category_from_sar")}</label>
                        </div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>2-3 {t("category_business_day")}</label>
                        </div>
                        <Typography variant="body1" gutterBottom>
                            {t("category_product_description")}
                        </Typography>
                        <List>
                            {packaging.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid>
                    {/* <Grid item={true}  xs={12} sm = {3} className = {classes.hotel} onClick = {()=>briefPage(4)}>
                        <img src = "/images/icons/.png" className = {classes.iconImage} />
                        <div className = {classes.headerText}>Hotel Identity packaging</div>
                        <Typography variant="body1" gutterBottom>
                            Full identity
                        </Typography>
                        <List>
                            {hotel.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid> */}
                    <Grid item={true}  xs={12} sm = {3} className = {classes.hotel} onClick = {()=>briefPage(5)}>
                        <img src = "/images/icons/restaurant.png" className = {classes.iconImage} />
                        <div className = {classes.headerText}>{t("category_rest_header")}</div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>{t("category_from_sar")}</label>
                        </div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>5-8 {t("category_business_day")}</label>
                        </div>
                        <Typography variant="body1" gutterBottom>
                            {t("category_full_identity")}
                        </Typography>
                        <List>
                            {retaurant.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid>
                    <Grid item={true}  xs={12} sm = {3} className = {classes.hotel} onClick = {()=>briefPage(6)}>
                        <img src = "/images/icons/profile.png" className = {classes.iconImage} />
                        <div className = {classes.headerText}>{t("category_social_header")}</div>
                        <Typography variant="body1" gutterBottom>
                            {t("category_social_description")}
                        </Typography>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>{t("category_from_sar")}</label>
                        </div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>2-3 {t("category_business_day")}</label>
                        </div>
                        <Typography variant="body1" gutterBottom>
                        {t("category_social_header")}
                        </Typography>
                        <List>
                            {social.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid>
                    <Grid item={true}  xs={12} sm = {3} className = {classes.hotel} onClick = {()=>briefPage(7)}>
                        <img src = "/images/icons/hotel.png" className = {classes.iconImage} />
                        <div className = {classes.headerText}>{t("category_apart_header")}</div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>{t("category_from_sar")}</label>
                        </div>
                        <div style = {{marginTop:5, marginBottom:10}}>
                            <label className = {classes.sar999}>5-8 {t("category_business_day")}</label>
                        </div>
                        <Typography variant="body1" gutterBottom>
                            {t("category_full_identity")}
                        </Typography>
                        <List>
                            {brand.map((item, index) => {
                                return <ListItem key = {index} className = {classes.listView}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItem>
                            })}
                        </List>
                    </Grid>
                    
                </Grid>
            </div>
            </div>
        </div>
    )
}
export default Category;