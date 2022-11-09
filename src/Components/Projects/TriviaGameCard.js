import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function TriviaGameCard() {
  return (
    <Link href="https://jordanvera.github.io/triviaGame/" target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/media/trivia.gif"
            alt="green iguana"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="div">
              Trivia Game
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A horror themed trivia game that was also made fairly early on in
              my programming journey. This game utilizes sound effects!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
