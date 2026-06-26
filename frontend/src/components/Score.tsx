interface PropType {
  score: number;
  flash: boolean;
}

export default function Score({ score, flash }: PropType) {
  return (
    <div className={flash ? "text-green-600 score" : "score"}>
      Score: {score}
    </div>
  );
}
