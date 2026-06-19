type PropType = {
  fetchData: () => Promise<void>;
  onClick: () => void;
};

export default function Button({ fetchData, onClick }: PropType) {
  const handleClick = async () => {
    onClick();
    await fetchData();
  };
  return (
    <button onClick={handleClick} className="start-btn">
      Start Game
    </button>
  );
}
