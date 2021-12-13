import { useState, useEffect } from 'react';

import SingleCard from './components/SingleCard';
import './App.css';

/*
  cardImages and imports need to be moved 
*/

import bard from './img/bard.png';
import blackmage from './img/blackmage.png';
import darkknight from './img/darkknight.png';
import dragoon from './img/dragoon.png';
import gunbreaker from './img/gunbreaker.png';
import monk from './img/monk.png';
import ninja from './img/ninja.png';
import paladin from './img/paladin.png';
import samurai from './img/samurai.png';
import summoner from './img/summoner.png';
import warrior from './img/warrior.png';
import whitemage from './img/whitemage.png';

const cardImages = [
  { "src": bard, matched: false },
  { "src": blackmage, matched: false },
  { "src": darkknight, matched: false },
  { "src": dragoon, matched: false },
  { "src": gunbreaker, matched: false },
  { "src": monk, matched: false },
  { "src": ninja, matched: false },
  { "src": paladin, matched: false },
  { "src": samurai, matched: false },
  { "src": summoner, matched: false },
  { "src": warrior, matched: false },
  { "src": whitemage, matched: false }
];

function App() {
  //state of cards and turns
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //state of choices
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  //set state to disable unselected cards to prevent user spam clicking and confusion
  const [disabled, setDisabled] = useState(false);

  /*
    Shuffle cards
  */
  const shuffleCards = () => {
    //duplicate cardImages twice(for matching) into a new array of cards
    const shuffledCards = [...cardImages, ...cardImages]
      //shuffle the new array of cards
      .sort(() => Math.random() - 0.5)
      //assign an id for each shuffled card
      .map((card) => ({ ...card, id: Math.random() }));

    //initialize shuffled cards, choices, and turn count
    setChoiceOne(null);
    setChoiceTwo(null);
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
      //after both card choices are made, disable other card choices until the turn is reset
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        //if both choices match then update the state using the previous state
        setCards(prevCards => {
          //create a new array based of the previous array
          return prevCards.map(card => {
            //compare the first card choice with the second card choice
            if (card.src === choiceOne.src) {
              //if they match set the match key to value true on both cards
              return { ...card, matched: true }
            } else {
              return card;
            };
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1200)
      };
    };
  }, [choiceOne, choiceTwo]);


  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  //shuffles cards on startup
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>FINAL MEMORY</h1>
      <button onClick={shuffleCards}>NEW GAME</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            //keeps cards flipped that have been chosen or matched
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            //make matched cards disappear
            disappear={card.matched}
            //disable cards not being chosen until
            disabled={disabled} />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default App;
