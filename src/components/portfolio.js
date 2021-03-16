
import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Button, 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    Typography,
    ListItemIcon,
    IconButton,
    ListItemSecondaryAction,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FolderIcon from '@material-ui/icons/Folder';
import CheckIcon from '@material-ui/icons/Check';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Pagination from '@material-ui/lab/Pagination';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
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
        // textAlign:"center",
        // alignItems:"center"
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
    hidden:{
        display:"none"
    },
    show:{
        display:"flex", 
        width:"100%", 
        justifyContent:"center", 
        marginTop:20
    }
   
  }));

function Portfolio (){
    const { t } = useTranslation();
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [fadepage, setFadepage] = useState("hidden");
    useEffect(async()=>{
        await axios.get("http://citeify.com/citeify_back/api/getportfolio").then((res)=>{
            console.log(res)
            setData(res.data);
            setFadepage("show")
        })
            
        
    },[])
    return (
        <div>
             <Typography variant="h6" gutterBottom style = {{marginLeft:"5%"}}>
                Portfolio
            </Typography>
        
            <div className = {classes.categoryBody}>
                <div className={classes.root}>
                
                <Grid container spacing = {4} className = {classes.mainGrid}>
                    {data.map((item, index)=>{
                        return <Grid item={true} xs={12} sm = {4} key = {index}>
                            <Card className={classes.root}>
                            <Typography variant="body1" gutterBottom className = {classes.titleText}>{item.port_name}</Typography>
                                <CardActionArea>
                                    <CardMedia
                                     component="img"
                                     
                                    className={classes.media}
                                    image= {"/images/design/"+item.port_image}
                                    
                                    />
                                </CardActionArea>
                                
                                <List>
                                    <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src = {"/images/designers/"+item.user_avatar} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.user_name}
                                        className = {classes.nameText}
                                    />
                                    <ListItemSecondaryAction style = {{display:"flex",flexDirection:"row"}}>
                                        <IconButton edge="end" aria-label="delete" style = {{fontSize:12}}>
                                            <ThumbUpIcon/>
                                        </IconButton>
                                        <Typography variant = "body2" gutterBottom style = {{marginTop:14}}>
                                            &nbsp; {item.port_likes}
                                        </Typography>
                                        
                                    </ListItemSecondaryAction>

                                    </ListItem>
                                </List>
                            </Card>

                        </Grid>
                    })}
                    <Pagination count={10} size="large" className = {classes[fadepage]} />
                </Grid>
                
                </div>
                
            </div>
            <div className = {classes.c}>
                
            </div>
        </div>
    )
}
export default Portfolio;