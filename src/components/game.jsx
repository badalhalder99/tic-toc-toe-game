import React, { useState } from 'react';
import calculateWinner from './calculateWinner.js';
import Board from './board';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    //If user clicked the occupied or if game is won,so you will return if the both condition is true:
    if (winner || boardCopy[i]) return;
    //put a X or put an O in the clicked square::
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))} className="restart">
      Restart Game
    </button>
  );

  return (
    <div className="game">
      <Board squares={board} onClick={handleClick} />
      <div>
        <h3 className="gameH3">
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </h3>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
