import { useState, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { Button, Box } from '@mui/material';
import { toast } from 'react-toastify';

export default function ChessGame() {
  const chessboardRef = useRef();
  const [rightClickedSquares, setRightClickedSquares] = useState({});
  const [moveSquares, setMoveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});
  const [game, setGame] = useState(new Chess());

  const toastSettingsObj = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();

    if (game.in_checkmate()) {
      setGame(new Chess());
      return toast.success('Nice Check Mate!', toastSettingsObj);
    }

    if (game.game_over() || possibleMoves.length === 0) {
      setGame(new Chess());
      return toast.warning(
        'Game is over via checkmate, stalemate, draw, threefold repetition, or insufficient material.',
        toastSettingsObj
      );
    }

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // always promote to a queen for example simplicity
      });
    });
    if (move === null) return false; // illegal move
    setTimeout(makeRandomMove, 200);
    return true;
  }

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onMouseOverSquare(square) {
    getMoveOptions(square);
  }

  function onMouseOutSquare() {
    if (Object.keys(optionSquares).length !== 0) setOptionSquares({});
  }

  function getMoveOptions(square) {
    const moves = game.moves({
      square,
      verbose: true,
    });
    if (moves.length === 0) {
      return;
    }

    const newSquares = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) &&
          game.get(move.to).color !== game.get(square).color
            ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
        borderRadius: '50%',
      };
      return move;
    });
    newSquares[square] = {
      background: 'rgba(255, 255, 0, 0.4)',
    };
    setOptionSquares(newSquares);
  }

  function onSquareClick() {
    setRightClickedSquares({});
  }

  function onSquareRightClick(square) {
    const colour = 'rgba(0, 0, 255, 0.4)';
    setRightClickedSquares({
      ...rightClickedSquares,
      [square]:
        rightClickedSquares[square] &&
        rightClickedSquares[square].backgroundColor === colour
          ? undefined
          : { backgroundColor: colour },
    });
  }

  return (
    <>
      <Chessboard
        arePremovesAllowed={true}
        animationDuration={200}
        boardWidth={200}
        position={game.fen()}
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
        onPieceDrop={onDrop}
        className="chessBoard"
        customBoardStyle={{
          borderRadius: '4px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
          margin: '0px auto',
        }}
        customSquareStyles={{
          ...moveSquares,
          ...optionSquares,
          ...rightClickedSquares,
        }}
        ref={chessboardRef}
      />
      <Box m={1} display="flex" justifyContent="center" alignItems="center">
        <Button onClick={() => setGame(new Chess())}>Restart</Button>
        <Button
          onClick={() => {
            safeGameMutate((game) => {
              game.undo();
            });
            chessboardRef.current.clearPremoves();
            setMoveSquares({});
          }}
        >
          Undo
        </Button>
      </Box>
    </>
  );
}
