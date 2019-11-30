import React, { useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Background from './Backgorund.JPG';
import AboutUS from './AboutUS';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import CardService from './Cards/CardService';
import CardPrice from './Cards/CardPrice';







const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <Grid container spacing={22} direction="column" align="center">
        <Grid item xs>
         <h1>OmBak DEVhouse Website</h1>
        </Grid>
 
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs align = "center">
          <img src={Background} alt="Background"/>
        </Grid>
       
        <Grid item xs align = "left">
          <AboutUS />
        </Grid>
      </Grid>

      
        <Grid item xs align = "center">
         <h1>Our Services </h1>

         <Grid container spacing={5} align = "center">
            <Grid item xs>
              <CardService imageUri= {"https://image.flaticon.com/icons/svg/73/73443.svg"} title={"WEB"}/>
            </Grid>

            <Grid item xs>
              <CardService imageUri= {"https://i.udemycdn.com/course/750x422/68876_4476_8.jpg"} title="Mobile Apps"/>
            </Grid>
          </Grid> 

          <Grid container spacing={5}>
            <Grid item xs>
              <CardService imageUri= {"https://www.pinclipart.com/picdir/big/37-370466_iot-internet-of-things-icon-clipart.png"} title= "Internet of Things (IOT)"/>
            </Grid>

            <Grid item xs>
             <CardService imageUri= {"https://cdn0.iconfinder.com/data/icons/data-science-2-1/66/92-512.png"} title={"Machine Leanring and Artificial Intelligence"}/>
            </Grid>
          </Grid>
        <Grid />
          
          <br />

        <Grid container spacing={0} align="center">
        <Grid item xs={25}>
         <h2>Pricing</h2> 
         <br />
         <p> Please be aware that all pur services have recurring fees (except ui/ux design) to keep your solution online. The prices listed below are the development fees only. To find out more, click Start a project. </p>
        </Grid>
 
      </Grid>
      <Grid container spacing={5} align = "center">
            <Grid item sm >
              <CardPrice title = {"Standard Website"} descrption = {"The go-to solution to showcase your business online"} body1 = {"> 4-5 web pages"} body2 = {"> 1 month development time"} body3 = {"> RM 5k excl. domain & hosting"} /> 
            </Grid>

            <Grid item sm >
               <CardPrice title = {"Enterprise Web App"} descrption = {"E-Commerce, customer relationshsip management (CRM) and the likes of them"} body1 = {"> full fledged web app + database"} body2 = {"> 3+ months develop time"} body3 = {"> RM 15k - 20k"} />
            </Grid>
          </Grid>

        <Grid /> <Grid container spacing={5} align = "center">
            <Grid item sm >
              <CardPrice title = {"Mobile App"} descrption = {"Transform your business to be mobile friendly, weather on IOS or Android"} body1 = {"> Mobile Platform + Database"} body2 = {"> 3 months development time"} body3 = {"> RM 10k per platform (ANDROID/IOS)"} />
            </Grid>

            <Grid item sm>
              <CardPrice title = {"Internet of Things (IOT)"} descrption = {"Extend your business to more than just the screens with the help of the internet"} body1 = {"> prototype model only (not production)"} body2 = {"> 1-3 months development time"} body3 = {"> get a quotation"}/>
            </Grid>
          </Grid>
        <Grid /> 
        
        <Grid container spacing={5} align = "center">
            <Grid item sm>
              <CardPrice title = {"Machine Learning and Artificial Intelegence"} descrption = {"Experienced in building artificial intelligence for the computer vision needs the machine learning"} body1 = {"> prototype model only (not production)"} body2 = {"> 1 - 3 month development time"} body3 = {"> get a quotation"}/>
            </Grid>

            <Grid item sm>
              <CardPrice title = {"UI/UX Design"} descrption = {"Desing your customer experience from every look & feel until the 'add to cart button'"} body1 = {"> mockup app/web design"} body2 = {"> 2 weeks development time"} body3 = {"> RM 5k"} />
            </Grid>
          </Grid>

        <Grid />

      </Grid>

    </div>
  );
}

