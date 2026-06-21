import Button from "./Button";
import LostMsg from "./LostMsg";

interface PropType {
  gameStart: boolean;
  isLost: boolean;
  handleGameStart: () => void;
  score: number;
}

export default function GameLost({
  gameStart,
  isLost,
  handleGameStart,
  score,
}: PropType) {
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
