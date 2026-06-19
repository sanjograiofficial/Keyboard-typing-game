import { useState } from "react";
import Word from "./components/Word";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Score from "./components/Score";
import "./App.css";

export default function App() {
  const [word, setWord] = useState<string>("");
  const [flash, setFlash] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [score, setScore] = useState<number>(0);

  const fetchData = async () => {
    const response = await fetch("https://api.api-ninjas.com/v2/randomword", {
      headers: {
        "X-API-Key": import.meta.env.VITE_API_KEY,
      },
    });
    const data = await response.json();
    setWord(data[0]);
  };
  const handleVisibility = () => {
    setHidden(!hidden);
  };
  return (
    <>
      {hidden ? null : (
        <Button fetchData={fetchData} onClick={handleVisibility} />
      )}
      <Word word={word} />
      <InputField
        word={word}
        score={score}
        setScore={setScore}
        fetchData={fetchData}
        setFlash={setFlash}
      />
      <Score score={score} flash={flash} />
    </>
  );
}
