interface PropType {
  score: number;
  flash: boolean;
}

export default function Score({ score, flash }: PropType) {
  return <div className={flash ? "flash score" : "score"}>Score: {score}</div>;
}
