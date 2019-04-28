import React, { useState } from 'react';
import utils from './utils';

import './App.css';

const App = () => {
  const [cards, setCards] = useState(utils.random(1, 5));

  return (
    <div className="App">
      {utils.range(1, cards).map(c => 
        <h1 key={c} className="h1">{c}</h1>
      )}
    </div>
  );
}

export default App;
