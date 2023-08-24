import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import "./card.css"

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className='poster'
          component="img"
        //   height="140"
          image="https://images.justwatch.com/poster/77242903/s332/avengers-infinity-war"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Infinity War
          </Typography>
          
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Purchase
        </Button>
      </CardActions>
    </Card>

    
  );
}