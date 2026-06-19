import { useState } from "react";

interface PropType {
  word: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  fetchData: () => Promise<void>;
  setFlash: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function InputField({
  word,
  score,
  setScore,
  fetchData,
  setFlash,
}: PropType) {
  const [ans, setAns] = useState("");
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
      onChange={(e) => setAns(e.target.value)}
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          if (word == ans) {
            increaseScore();
            fetchData();
          }
          setAns("");
        }
      }}
    />
  );
}
