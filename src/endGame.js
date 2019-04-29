import React from 'react';

const EndGame = props => (
    <>
    <h1>
        {props.lost ? "You lose!" : "You win!"}
    </h1>
    <button onClick={props.playAgain}>Play Again</button>
    </>
);

export default EndGame