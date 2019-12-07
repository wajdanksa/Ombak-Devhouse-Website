import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DenseAppBar from './AppBar';
import Typography from '@material-ui/core/Typography';
import Button_Next from './Buttons/Button_Next';
import ButtonPrev from './Buttons/ButtonPrev';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <DenseAppBar />
        <br />
        <br />
      
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <div>
              <Typography variant="h7" component="h2" textAlign="left" > 
                You picked Standard Website!
              </Typography>
              <Typography variant="subtitle1" component="h2">
                Here's how it is going to go
              </Typography>
          </div>  
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Grid item xs>
          <div>
              <Typography variant="h6" component="h2" textAlign="left" > 
                Stage 1: Understanding your business needs (2-3 days)
              </Typography>
              <p>Our team will spend the time to get to know your business.<br />
                The more we are informed about what you want, the better solutions we can design for your business needs</p>
          </div>
        </Grid>
        
        <Grid item xs>
          <div>
              <Typography variant="h6" component="h2" textAlign="left" > 
                Stage 2: Design Ui/Ux (1 week)
              </Typography>
              <p> You and our in-house web designer will design the overall user experience of your website. <br />
                  This part is critical to guide your future users to do business with you </p>
          </div>
        </Grid>
        <Grid item xs>
          <div>
              <Typography variant="h6" component="h2" textAlign="left" > 
                Stage 3: Develpment (2+ weeks)
              </Typography>
              <p>This is where our core talents will work hard to bring what you and the designer came out with  in life. <br />
                  Minimal renditions are allowed once the project reaches this phase. </p>
          </div>
        </Grid>
        
        <Grid item xs>
          <div>
            <Typography variant="h6" component="h2" textAlign="left" >
              Stage 4: Test and Launch (1 week)
            </Typography>
            <p>All our work must me tested rigorously before it is launched. You will get to be part of our testing phase before the Launch!</p>
          </div>
        </Grid>
        </Paper>
        </Grid>
        
        <Grid item xs zeroMinWidth>
          <Paper className={classes.paper}>
            <Grid item xs = {6}>
                <h5>Estimated quotation </h5>
            </Grid>
            <Grid container spacing ={1}>
                <Grid item xs>
                  <Typography variant="h6" component="h2" textAlign="left" >
                     Do you have a Domain ready?           
                  </Typography>     
                  <p align='center'>name.com/com.my/.org/etc</p>
                </Grid>

                <Grid item xs container justify = 'center'>
                  StateButton
                </Grid>
        </Grid>

        <Grid container spacing ={1}>
                <Grid item xs>
                <Typography variant="h6" component="h2" textAlign="left" >
                    Do you have a Hosting ready?
                  </Typography> 
                  <p alight='center'>server that will keep your website online 24/7</p>
                </Grid>

                <Grid item xs container justify = 'center'>
                    StateButton
                </Grid>



            </Grid>

            <Grid container spacing ={1}>
                <Grid item xs>
                  <Typography variant="h6" component="h2" textAlign="left" >
                    Development Fee:
                  </Typography>
                  <p>one-time cost to develop the web</p>
                </Grid>

                <Grid item xs container justify = 'center'>
                    FeeAmount
                </Grid>



            </Grid>

            <Grid container spacing ={1}>
                <Grid item xs>
                  <Typography variant="h6" component="h2" textAlign="left" >
                    Yearly Fee:
                  </Typography>
                  <p>Maintenance fee to keep your website online 24/7</p>
                </Grid>

                <Grid item xs container justify = 'center'>
                    FeeAmount
                </Grid>



            </Grid>

          </Paper>
        </Grid>
      </Grid>
     
     
     
      <Grid container spacing={6}>
        <Grid item xs align='center' spacing={12}>
          <ButtonPrev />
        </Grid>
        <Grid item xs>
          <div align='center'>
            <h5> Not sure what you are looking for?</h5>  <p>Schedule a time for consultation, it's free!</p> 
          </div>
        </Grid>
        <Grid item xs align='center'>
          <Button_Next />
        </Grid>
        </Grid>
    </div>
  );
}

