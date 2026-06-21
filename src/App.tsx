import { useState } from "react";
import Word from "./components/Word";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Score from "./components/Score";
import "./App.css";
import Typo from "./components/Error";
import LostMsg from "./components/LostMsg";
import data from "./data/words";

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
  return gameStart ? (
    <>
      <Button
        gameStart={gameStart}
        isLost={isLost}
        handleClick={handleGameStart}
      />
      <Word word={word} />
      <InputField
        word={word}
        score={score}
        setScore={setScore}
        fetchData={getData}
        setFlash={setFlash}
        setTypoFlash={setTypoFlash}
        typoCount={typoCount}
        setTypoCount={setTypoCount}
        setIsLost={setIsLost}
        setGameStart={setGameStart}
      />
      <Score score={score} flash={flash} />
      <Typo typoCount={typoCount} typoFlash={typoFlash} />
    </>
  ) : (
    <>
      <Button
        gameStart={gameStart}
        isLost={isLost}
        handleClick={handleGameStart}
      />
      <LostMsg score={score} />
    </>
  );
}
