interface PropType {
  typoCount: number;
  typoFlash: boolean;
}

export default function Typo({ typoCount, typoFlash }: PropType) {
  return (
    <div className={typoFlash ? "red-flash typo" : "typo"}>Mistake: {typoCount}</div>
  );
}
