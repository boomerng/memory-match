import React, { useState } from 'react';
import utils from './utils';

import './App.css';

const App = () => {
  const cards = [2,1,3,1,2,3];
  const [cardPick, setCardPick] = useState(-1);
  const [clickedCard, setClickedCard] = useState(-1);
  const [pickedCards, setPickedCards] = useState([]);

  return (
    <div className="App">
      {cards.map((c, i) => 
        <h1 key={i} className="h1"
          onMouseDown={() => {
            setClickedCard(i);
          }}
          onMouseUp={() => {
            setClickedCard(-1);
          }}
          onClick={() => { 
            if (cardPick === -1) {
              setCardPick(i);
            } else {
              if (cards[cardPick] === c) {
                setPickedCards(pickedCards.concat([cardPick, i]));
              }
              setCardPick(-1);
            }
          }}
          >
          {pickedCards.indexOf(i) > -1 || cardPick === i || clickedCard === i ? c: 'X'}
        </h1>
      )}
    </div>
  );
}

export default App;
