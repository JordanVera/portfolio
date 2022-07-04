import movies from '../../movies/MoviesObj';
import { Rating, Link } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Grid } from '@mui/material';

export default function PulpFiction() {
  const { pulpFiction } = movies;

  return (
    <Card sx={{ maxWidth: 345, marginBottom: '24px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/media/movieBackdrops/pulpFiction.jpg"
          alt={pulpFiction.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pulpFiction.title}
          </Typography>

          <Rating
            className="movieRating"
            name="read-only"
            value={pulpFiction.vote_average}
            readOnly
            precision={0.1}
            max={10}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />

          <Typography variant="body2" color="text.secondary">
            {pulpFiction.overview}
          </Typography>

          <Typography mt={1} variant="subtitle1" gutterBottom component="div">
            {pulpFiction.release_date}
          </Typography>
          <Link
            size="sm"
            href="https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0"
            target="_blank"
            rel="noreferrer"
          >
            More Info
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
