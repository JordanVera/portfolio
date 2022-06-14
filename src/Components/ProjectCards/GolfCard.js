import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function GolfCard() {
  return (
    <Link href="https://pga-alpha.herokuapp.com/" target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/media/golfball.gif"
            alt="green iguana"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="div">
              PGA Alpha
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PGA Alpha is a data visualization web app that is built entirely
              by me! Fun fact, this app is my first project ever using{' '}
              <Link src="https://reactjs.org/" target="_blank">
                React.js
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
