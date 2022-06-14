import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function ReadingList() {
  return (
    <Link href="https://mysterious-waters-73981.herokuapp.com/" target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/media/griddy.gif"
            alt="green iguana"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="div">
              Reading List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              NFL Last Longer is a full fledge fantasy football web application
              built using nodejs, ejs, express, and many other web technologies.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
