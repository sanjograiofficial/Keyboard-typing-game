import { useState } from "react";

interface PropType {
  word: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  fetchData: () => Promise<void>;
  setFlash: React.Dispatch<React.SetStateAction<boolean>>;
  setTypoFlash: React.Dispatch<React.SetStateAction<boolean>>;
  typoCount: number;
  setTypoCount: React.Dispatch<React.SetStateAction<number>>;
  setIsLost: React.Dispatch<React.SetStateAction<boolean>>;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function InputField({
  word,
  score,
  setScore,
  fetchData,
  setFlash,
  setTypoFlash,
  typoCount,
  setTypoCount,
  setIsLost,
  setGameStart,
}: PropType) {
  const [ans, setAns] = useState("");

  const increaseTypo = () => {
    setTypoCount(typoCount + 1);
    if (typoCount >= 3) {
      setIsLost(true);
      setGameStart(false);
      setTypoCount(0);
    }
    setTypoFlash(true);
    setTimeout(() => {
      setTypoFlash(false);
    }, 300);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAns(value);
    if (!word.startsWith(value)) {
      setAns("");
      increaseTypo();
      return;
    }
    if (word == value) {
      increaseScore();
      fetchData();
      setAns("");
    }
  };
  const increaseScore = () => {
    setScore(score + 1);
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
    }, 300);
  };
  return (
    <input
      type="text"
      className="input"
      value={ans}
      onChange={(e) => handleChange(e)}
    />
  );
}
