type PropType = {
  fetchData: () => Promise<void>;
};

export default function Button({ fetchData }: PropType) {
  return <button onClick={fetchData}>Start Game</button>;
}
