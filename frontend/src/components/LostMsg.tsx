interface PropType {
  score: number;
}
export default function LostMsg({ score }: PropType) {
  return (
    <>
      <div className="py-[10px]">Your Score: {score}</div>
    </>
  );
}
