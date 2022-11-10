import { Container, Grid, Typography } from '@mui/material';
import ChessGame from './ChessGame';

export default function ChessRow() {
  return (
    <div id="chessGame">
      <Container>
        <Grid container>
          <Grid className="gridItem" item mx="auto" my="auto" md={5}>
            <ChessGame />
          </Grid>
          <Grid
            className="gridItem"
            item
            md={7}
            sx={{ bgcolor: 'background.paper', py: 2, px: 2 }}
          >
            <Typography variant="h4">Chess Game</Typography>
            <p>
              Chess is an abstract strategy game and involves no hidden
              information. It is played on a square chessboard with 64 squares
              arranged in an eight-by-eight grid. At the start, each player (one
              controlling the white pieces, the other controlling the black
              pieces) controls sixteen pieces: one king, one queen, two rooks,
              two bishops, two knights, and eight pawns. The object of the game
              is to checkmate the opponent's king, whereby the king is under
              immediate attack (in "check") and there is no way for it to
              escape. There are also several ways a game can end in a draw.
            </p>
            <p>
              One of the goals of early computer scientists was to create a
              chess-playing machine. In 1997,{' '}
              <a
                href="https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)"
                target="_blank"
                rel="noreferrer"
              >
                Deep Blue
              </a>{' '}
              became the first computer to beat the reigning World Champion in a
              match when it defeated Garry Kasparov. Today's chess engines are
              significantly stronger than the best human players, and have
              deeply influenced the development of chess theory.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
