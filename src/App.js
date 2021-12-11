import { useState } from 'react';

import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  { "src": "/img/Bard.png" },
  { "src": "/img/BlackMage.png" },
  { "src": "/img/DarkKnight.png" },
  { "src": "/img/Dragoon.png" },
  { "src": "/img/GunBreaker.png" },
  { "src": "/img/Monk.png" },
  { "src": "/img/Ninja.png" },
  { "src": "/img/Paladin.png" },
  { "src": "/img/Samurai.png" },
  { "src": "/img/Summoner.png" },
  { "src": "/img/Warrior.png" },
  { "src": "/img/WhiteMage.png" }
]

function App() {
  //state of cards and turns
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //Shuffle cards
  const shuffleCards = () => {
    //duplicate cardImages twice(for matching) into a new array of cards
    const shuffledCards = [...cardImages, ...cardImages]
      //shuffle the new array of cards
      .sort(() => Math.random() - 0.5)
      //assign an id for each shuffled card
      .map((card) => ({ ...card, id: Math.random }))

    //initialize shuffled cards and turns
    setCards(shuffledCards);
    setTurns(0);
  }

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Final Memory</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div >
  );
}

export default App;
