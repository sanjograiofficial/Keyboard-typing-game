type PropType = {
  handleClick: () => void;
  gameStart: boolean;
  isLost: boolean;
};

export default function Button({ handleClick, gameStart, isLost }: PropType) {
  let gameOverMsg;
  if (!gameStart) {
    gameOverMsg = "Start Game";
  }
  if (isLost) {
    gameOverMsg = "Try Again";
  }
  return gameStart ? null : (
    <button
      onClick={handleClick}
      className="p-3 bg-gray-500 rounded-xl border-none start-btn"
    >
      {gameOverMsg}
    </button>
  );
}
