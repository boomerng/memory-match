import React, { useState, useEffect } from 'react';
import Card from './Card';
import EndGame from './endGame';
import utils from './utils';

import './App.css';

const numberOfSet = utils.random(2, 8);
const cards = utils.duplicate(utils.range(1, numberOfSet)).sort(() => Math.random() - 0.5);

const App = () => {
  const [cardPick, setCardPick] = useState(-1);
  const [clickedCard, setClickedCard] = useState(-1);
  const [pickedCards, setPickedCards] = useState([]);
  const [timeLeft, setTimeLeft] = useState(120);
  
  useEffect(() => {
    if (timeLeft > 0 && pickedCards.length !== cards.length) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  });

  const isShowCard = (cardIndex) => {
    return pickedCards.includes(cardIndex) || cardPick === cardIndex || clickedCard === cardIndex;
  };

  const onCardMouseToggle = (cardIndex) => {
    setClickedCard(cardIndex);
  }

  const onCardClick = (cardIndex, card) => {
    if (cardPick === -1) {
      setCardPick(cardIndex);
    } else {
      if (cards[cardPick] === card && cardIndex !== cardPick) {
        setPickedCards(pickedCards.concat([cardPick, cardIndex]));
      }
      setCardPick(-1);
    }
  }

  const gameIsLost = timeLeft === 0;
  const gameIsWon = pickedCards.length === cards.length;

  return (
    <div className="App">
      {(gameIsLost || gameIsWon) ? 
      <EndGame lost={gameIsLost} />
      :
      (<>
        <div className="Card-container">
          {cards.map((c, i) => 
            <Card key={i} 
              card={c}
              cardIndex={i}
              isShowCard={isShowCard} 
              onCardMouseToggle={onCardMouseToggle}
              onCardClick={onCardClick}
            />
          )}
        </div>
        <div className="Margin-Center">
          Time Remaining: {timeLeft}
        </div>
        </>
      )}
    </div>
  );
}

export default App;