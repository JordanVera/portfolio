import { useState } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Dice from 'react-dice-roll';
import KillBill from './KillBill';
import PulpFiction from './PulpFiction';
import Holes from './Holes';
import FullMetalJacket from './FullMetalJacket';
import SchoolOfRock from './SchoolOfRock';
import BackToTheFuture from './BackToTheFuture';

export default function MovieDice() {
  const [diceNumber, setDiceNumber] = useState(0);

  return (
    <Container id="movieDice">
      <Typography variant="h4">Movie Dice</Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item alignItems="center" justify="center">
          <div className="dice">
            <Dice
              onRoll={(num) => {
                setDiceNumber(num);
                console.log(num);
              }}
              size={100}
              faces={[
                '/media/1.png',
                '/media/2.png',
                '/media/3.png',
                '/media/4.png',
                '/media/5.png',
                '/media/6.png',
              ]}
            />
          </div>
          {diceNumber === 0 && (
            <Typography variant="subtitle1" className="subtitle" my={2}>
              Please roll the dice to be given a movie suggestion
            </Typography>
          )}
          {diceNumber === 1 && <KillBill />}
          {diceNumber === 2 && <Holes />}
          {diceNumber === 3 && <PulpFiction />}
          {diceNumber === 4 && <BackToTheFuture />}
          {diceNumber === 5 && <FullMetalJacket />}
          {diceNumber === 6 && <SchoolOfRock />}
        </Grid>
      </Grid>
    </Container>
  );
}
