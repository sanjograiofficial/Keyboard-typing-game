type PropType = {
  handleClick: () => void;
  gameStart: boolean;
  isLost: boolean;
};

export default function Button({
  handleClick,
  gameStart,
  isLost,
}: PropType) {
  let gameOverMsg;
  if (!gameStart) {
    gameOverMsg = "Start Game";
  }
  if (isLost) {
    gameOverMsg = "Try Again";
  }
  return gameStart ? null : (
    <button onClick={handleClick} className="start-btn">
      {gameOverMsg}
    </button>
  );
}
