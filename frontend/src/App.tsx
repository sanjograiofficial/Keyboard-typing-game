import { useState } from "react";
import data from "./data/words";
import GameStart from "./components/GameStart";
import GameLost from "./components/GameLost";
import "./App.css";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [word, setWord] = useState<string>("");
  const [flash, setFlash] = useState(false);
  const [typoFlash, setTypoFlash] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [typoCount, setTypoCount] = useState<number>(0);

  const getData = () => {
    const value = data[Math.floor(Math.random() * data.length)];
    setWord(value);
  };
  const handleGameStart = () => {
    setGameStart(true);
    setScore(0);
    setIsLost(false);
    getData();
  };
  return (
    <div className="container">
      {gameStart ? (
        <GameStart
          gameStart={gameStart}
          isLost={isLost}
          handleGameStart={handleGameStart}
          word={word}
          score={score}
          setScore={setScore}
          getData={getData}
          setFlash={setFlash}
          setTypoFlash={setTypoFlash}
          typoCount={typoCount}
          setTypoCount={setTypoCount}
          setIsLost={setIsLost}
          setGameStart={setGameStart}
          flash={flash}
          typoFlash={typoFlash}
        />
      ) : (
        <GameLost
          gameStart={gameStart}
          isLost={isLost}
          score={score}
          handleGameStart={handleGameStart}
        />
      )}
    </div>
  );
}
