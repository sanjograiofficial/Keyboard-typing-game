interface PropType {
  score: number;
}
export default function LostMsg({ score }: PropType) {
  return (
    <>
      <div className="lost-msg">Your Score: {score}</div>
    </>
  );
}
