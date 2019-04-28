import React from 'react';

const EndGame = props => (
    <h1>
        {props.lost ? "You lose" : "You win"}
    </h1>
);

export default EndGame