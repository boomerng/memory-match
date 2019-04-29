import React, { useState } from 'react';
import GameWrapper from './gameWrapper';

import './App.css';

const App = () => {
  const [wrapperKey, setWrapperKey] = useState(0);
  return (
    <GameWrapper key={wrapperKey} resetClick={() => {setWrapperKey(wrapperKey + 1)}}></GameWrapper>
  )
}

export default App;