import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function GifGeneratorCard() {
  return (
    <Link href="https://jordanvera.github.io/gifGenerator/" target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/media/gif.webp"
            alt="green iguana"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="div">
              Gif Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This website is a simple gif generator, give it a topic and it
              will give you back a bunch of gifs. This is one of my first
              projects ever!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
