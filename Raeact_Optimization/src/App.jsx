import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigerCounter from './components/Counter/ConfigerCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);
  function hadleSetCount(newCout){
    setChosenCount(newCout);
  }

  return (
    <> 
      <Header />
      <main>
        <ConfigerCounter hadleSetCount={hadleSetCount}/>
        <Counter key={chosenCount  } initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
