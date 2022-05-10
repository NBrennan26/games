import { useState, useEffect } from "react";
import Card from "./Card";

const Table = (props) => {
  const [deck, setDeck] = useState([]);

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

  const buildCard = (id, character) => {
    const newCard = {
      id: id,
      clickCount: 0,
      value: id,
      character: character,
    };
    setDeck((deck) => [...deck, newCard]);
  };

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

  const buildDeck = () => {
    for (let i = 0; i < 12; i++) {
      buildCard(i, assignCharacter(i));
    }
  };

  useEffect(() => {
    if (deck.length === 0) {
      buildDeck();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id, count) => {
    const newCount = count;
    const tgt = id;
    const mappedDeck = deck.map((card) => {
      if (card.id === tgt) {
        const curCard = card;
        const curCount = card.clickCount;
        const newCount = curCount + 1;
        const source = { clickCount: newCount };
        const newCard = Object.assign(curCard, source);
        return newCard;
      }
      return card;
    });
    setDeck(mappedDeck);
    props.handleScore(newCount);
  };

  const shuffleDeck = () => {
    if (deck.length > 0) {
      const ranArray = fischerYates();
      const mappedDeck = deck.map((card) => {
        const curCard = card;
        const cardID = curCard.id;
        const newValue = ranArray[cardID];
        const source = { value: newValue };
        const newCard = Object.assign(curCard, source);
        return newCard;
      });
      mappedDeck.sort((a, b) => {
        return a.value - b.value;
      });
      setDeck(mappedDeck);
    }
  };

  const resetClickCount = () => {
    if (props.currentScore === 0 && deck.length > 0) {
      const mappedDeck = deck.map((card) => {
        const source = { clickCount: 0 };
        const newCard = Object.assign(card, source);
        return newCard;
      });
      setDeck(mappedDeck);
    }
  };

  useEffect(() => {
    shuffleDeck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck.length]);

  useEffect(() => {
    shuffleDeck();
    resetClickCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentScore]);

  return (
    <div id="table">
      {deck.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          character={item.character}
          value={item.value}
          clickCount={item.clickCount}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Table;
