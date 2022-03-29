import './App.css';
import React, {useState} from 'react';
import {StartGame} from './components/StartGame';
import {MainCard} from './components/MainCard'

function App() {

  const[ flip, setFlip] = useState('');
  const[ shadow, setShadow] = useState('');
  const[ movie, setMovie] = useState('');
  const flipCard = (MovieName) => {
    setFlip('180');
    setShadow('-10');
    setMovie(MovieName)
  }
  
  return (
    <div className="App">
      <div className="Game">        
        <div className='leftBox'>
            <MainCard flip={flip} shadow={shadow} movie={movie}/>
          </div>
          <div className='rightBox'>
            <StartGame flipper={flipCard}/>
            </div>
        </div>      
    </div>
  );
}

export default App;
