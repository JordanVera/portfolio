import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function MassEmailerCard() {
  return (
    <Link href="https://github.com/JordanVera/bulkEmail" target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/media/email.gif"
            alt="green iguana"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="div">
              Mass Emailer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Simple mass emailer built in nodejs. This app was built out at my
              construction job and was utilized by the marketing team.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
