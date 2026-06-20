type PropType = {
  fetchData: () => void;
  gameStart: boolean;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  isLost: boolean;
  setIsLost: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function Button({
  fetchData,
  gameStart,
  setGameStart,
  isLost,
  setIsLost,
  score,
  setScore,
}: PropType) {
  const handleClick = () => {
    setGameStart(true);
    setScore(0);
    setIsLost(false);
    fetchData();
  };
  let gameOverMsg;
  if (!gameStart) {
    gameOverMsg = "Start Game";
  }
  if (isLost) {
    gameOverMsg = "Try Again";
  }
  return gameStart ? null : (
    <button onClick={handleClick} className="start-btn">
      {gameOverMsg || (isLost && gameOverMsg + " Your Score: " + score)}
    </button>
  );
}
