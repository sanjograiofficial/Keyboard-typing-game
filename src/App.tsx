import { useState } from "react";
import Word from "./components/Word";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Score from "./components/Score";
import "./App.css";
import Typo from "./components/Error";
import LostMsg from "./components/LostMsg";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [word, setWord] = useState<string>("");
  const [flash, setFlash] = useState(false);
  const [typoFlash, setTypoFlash] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [typoCount, setTypoCount] = useState<number>(0);

  const fetchData = async () => {
    const response = await fetch("https://api.api-ninjas.com/v2/randomword", {
      headers: {
        "X-API-Key": import.meta.env.VITE_API_KEY,
      },
    });
    const data = await response.json();
    setWord(data[0]);
  };
  return gameStart ? (
    <>
      <Button
        fetchData={fetchData}
        gameStart={gameStart}
        setGameStart={setGameStart}
        isLost={isLost}
        setIsLost={setIsLost}
        score={score}
        setScore={setScore}
      />
      <Word word={word} />
      <InputField
        word={word}
        score={score}
        setScore={setScore}
        fetchData={fetchData}
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
        fetchData={fetchData}
        gameStart={gameStart}
        setGameStart={setGameStart}
        isLost={isLost}
        setIsLost={setIsLost}
        score={score}
        setScore={setScore}
      />
      <LostMsg score={score} />
    </>
  );
}
