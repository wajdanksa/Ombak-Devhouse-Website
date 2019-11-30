import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  card: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '100%',
    marginTop: '30'
  },
});


const CardService = (props)=>{
  const classes = useStyles();

  return (
    <Card className={classes.card}>
       <CardActionArea>
         <CardMedia
          className={classes.media}
          image= {props.imageUri}
          title="Click to follow the service"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}


export default CardService;

