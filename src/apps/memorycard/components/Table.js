/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Card from "./Card";

const Table = (props) => {
  const [deck, setDeck] = useState([]);

  let deckBuilt = false;

  // Fischer Yates Algorithm to Shuffle
  const fischerYates = () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let arrLength = arr.length;
    let index;
    let temp;
    while (--arrLength > 0) {
      index = Math.floor(Math.random() * (arrLength + 1));
      temp = arr[index];
      arr[index] = arr[arrLength];
      arr[arrLength] = temp;
    }
    return arr;
  };

  // Build Card for each character (Called by buildDeck)
  const buildCard = (id, character) => {
    const newCard = {
      id: id,
      character,
      position: id,
      clicked: false,
    };
    setDeck((deck) => [...deck, newCard]);
  };

  // Build a deck of 12 cards
  const buildDeck = () => {
    for (let i = 0; i < 12; i++) {
      buildCard(i, assignCharacter(i));
    }
  };

  // Assign character names based on value
  const assignCharacter = (i) => {
    return i === 0
      ? "Fry"
      : i === 1
      ? "Leela"
      : i === 2
      ? "Bender"
      : i === 3
      ? "Amy"
      : i === 4
      ? "Hermes"
      : i === 5
      ? "Farnsworth"
      : i === 6
      ? "Zoidberg"
      : i === 7
      ? "Zapp"
      : i === 8
      ? "Kif"
      : i === 9
      ? "Nibbler"
      : i === 10
      ? "Scruffy"
      : "Slurms";
  };

  // Trigger Deck Creation on load (if no deck exists yet)
  useEffect(() => {
    if (deck.length === 0 && !deckBuilt) {
      deckBuilt = true;
      buildDeck();
    }
  }, [deck, deckBuilt]);

  // Shuffle Deck using fischerYates shuffled array
  const shuffleDeck = () => {
    if (deck.length > 0) {
      const ranArray = fischerYates();
      const mappedDeck = deck.map((card) => {
        const curCard = card;
        const cardID = curCard.id;
        const newPosition = ranArray[cardID];
        const source = { position: newPosition };
        const newCard = Object.assign(curCard, source);
        return newCard;
      });
      mappedDeck.sort((a, b) => {
        return a.position - b.position;
      });
      setDeck(mappedDeck);
    }
  };

  // Shuffle current Deck
  useEffect(() => {
    shuffleDeck();
  }, [deck.length]);

  // Handle Click
  const handleClick = (id, clicked) => {
    console.log("click");
    console.log(clicked);
    if (!clicked) {
      // First Click
      const mappedDeck = deck.map((card) => {
        if (card.id === id) {
          // const curCard = card
          const source = { clicked: true };
          const newCard = Object.assign(card, source);
          return newCard;
        }
        return card;
      });
      setDeck(mappedDeck);
      shuffleDeck();
      props.handleScore(clicked)
    } else {
      // Already clicked
      console.log("Already clicked");
      props.handleScore(clicked)
      // Prompt play again
    }
  };

  // Shuffle when score changes (when card clicked)
  useEffect(() => {
    shuffleDeck();
  }, [props.currentScore]);

  // useEffect(() => {
  //   console.log(deck);
  // }, [deck]);

  // Reset clicked
  const resetClicked = () => {
    if (props.currentScore === 0 && deck.length > 0) {
      const mappedDeck = deck.map((card) => {
        const source = { clicked: false };
        const newCard = Object.assign(card, source);
        return newCard;
      });
      setDeck(mappedDeck);
    }
  };

  // Shuffle and reset click if score is reset
  useEffect(() => {
    shuffleDeck();
    resetClicked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentScore]);

  return (
    <div id="table">
      {deck.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          character={item.character}
          position={item.position}
          clicked={item.clicked}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Table;
