import { useState, useEffect } from 'react';

import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  { "src": "/img/Bard.png", matched: false },
  { "src": "/img/BlackMage.png", matched: false },
  { "src": "/img/DarkKnight.png", matched: false },
  { "src": "/img/Dragoon.png", matched: false },
  { "src": "/img/GunBreaker.png", matched: false },
  { "src": "/img/Monk.png", matched: false },
  { "src": "/img/Ninja.png", matched: false },
  { "src": "/img/Paladin.png", matched: false },
  { "src": "/img/Samurai.png", matched: false },
  { "src": "/img/Summoner.png", matched: false },
  { "src": "/img/Warrior.png", matched: false },
  { "src": "/img/WhiteMage.png", matched: false }
];

function App() {
  //state of cards and turns
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //state of choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  /*
    Shuffle cards
  */
  const shuffleCards = () => {
    //duplicate cardImages twice(for matching) into a new array of cards
    const shuffledCards = [...cardImages, ...cardImages]
      //shuffle the new array of cards
      .sort(() => Math.random() - 0.5)
      //assign an id for each shuffled card
      .map((card) => ({ ...card, id: Math.random() }))

    //initialize shuffled cards and turns
    setCards(shuffledCards);
    setTurns(0);
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  /*
    Compare card selections
  */
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        //if both choices match then update the state using the previous state
        setCards(prevCards => {
          //create a new array based of the previous array
          return prevCards.map(card => {
            //compare the first card choice with the second card choice
            if (card.src === choiceOne.src) {
              //if they match we set the match key to value true on both cards
              return { ...card, matched: true }
            } else {
              return card;
            };
          });
        });
        resetTurn();
      } else {
        resetTurn();
      };
    };
  }, [choiceOne, choiceTwo]);

  console.log(cards);


  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  };

  return (
    <div className="App">
      <h1>Final Memory</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default App;
