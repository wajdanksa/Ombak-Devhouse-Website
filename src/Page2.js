import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '../src/AppBar';
import Typography from '@material-ui/core/Typography';
import CardService from './Cards/CardService';
import Button_Next from '../src/Buttons/Button_Next';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

             <Grid item xs={12}><AppBar /></Grid>

            <Grid item xs={12} >
              <Paper className={classes.paper}><Typography variant="h5" fontWeight = "fontWeightBold" color="inherit">
                What project are you building today?
              </Typography></Paper>
            </Grid>
        
            <Grid item xs={6} lg={3}>
              <CardService imageUri= {"https://cdn4.iconfinder.com/data/icons/hosting-and-server/500/Hosting-30-512.png"} title={"Standard Website"}/>
            </Grid>

            <Grid item xs={6} sm={3}>
              <CardService imageUri= {"https://icon-library.net/images/web-app-icon/web-app-icon-1.jpg"} title="Enterprise Web App"/>
            </Grid>

            <Grid item xs={6} sm={3}>
              <CardService imageUri= {"https://icon-library.net/images/mobile-app-icon-png/mobile-app-icon-png-20.jpg"} title= "Mobile App"/>
            </Grid>

            <Grid item xs={6} sm={3}>
              <CardService imageUri= {"https://cdn3.iconfinder.com/data/icons/web-development-40/128/14-512.png"} title={"UI/UX"}/>
            </Grid>

            <Grid item xs={9} sm={6}>
              <CardService imageUri= {"https://image.flaticon.com/icons/png/512/1185/1185915.png"} title={"IOT/ML&AI"}/>
            </Grid>
            
            <Grid item xs={9} >
             <Paper className={classes.paper}>
             <Typography variant="h5" fontWeight = "fontWeightBold" color="inherit">
                Not sure what you are looking for?
                <br />
                Schedule a time for consultation, it free!
              </Typography>
             </Paper>
            </Grid>

            <Grid item xs={6} sm={3} align='center'>
              <Button_Next />
            </Grid>
      </Grid>
    </div>
  );
}
