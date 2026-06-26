interface PropType {
  typoCount: number;
  typoFlash: boolean;
}

export default function Typo({ typoCount, typoFlash }: PropType) {
  return (
    <div className={typoFlash ? "text-red-600 score" : "score"}>
      Mistake: {typoCount}
    </div>
  );
}
