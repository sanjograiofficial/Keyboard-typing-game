import { useEffect, useRef } from "react";
import { createRecord } from "../api/leaderboards";
import Button from "./Button";
import LostMsg from "./LostMsg";

interface PropType {
  gameStart: boolean;
  isLost: boolean;
  handleGameStart: () => void;
  score: number;
  name: string;
}

export default function GameOver({
  gameStart,
  isLost,
  handleGameStart,
  score,
  name,
}: PropType) {
  const hasSubmitted = useRef(false);
  useEffect(() => {
    if (!isLost || hasSubmitted.current) return;
    hasSubmitted.current = true;
    createRecord({ name, score });
  }, [isLost, name, score]);

  return (
    <div className="gameBox">
      <Button
        gameStart={gameStart}
        isLost={isLost}
        handleClick={handleGameStart}
      />
      <LostMsg score={score} />
    </div>
  );
}
