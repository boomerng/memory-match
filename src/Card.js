import React from 'react';

const Card = props => (
    <h1 className="h1"
      onMouseDown={() => props.onCardMouseToggle(props.cardIndex)}
      onMouseUp={() => props.onCardMouseToggle(-1)}
      onMouseLeave={() => props.onCardMouseToggle(-1)}
      onClick={() => props.onCardClick(props.cardIndex, props.card)}
      >
      {props.isShowCard(props.cardIndex) ? props.card : 'X'}
    </h1>
  );

export default Card;
