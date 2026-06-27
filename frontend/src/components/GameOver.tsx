import { useEffect, useRef, useState } from "react";
import { createRecord } from "../api/leaderboards";
import Button from "./Button";
import LostMsg from "./LostMsg";
import LeaderBoards from "./LeaderBoards";

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
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const hasSubmitted = useRef(false);
  useEffect(() => {
    if (!isLost || hasSubmitted.current) {
      return;
    }
    setShowLeaderBoard(true);
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
      {showLeaderBoard && (
        <LeaderBoards setShowLeaderBoard={setShowLeaderBoard} />
      )}
    </div>
  );
}
