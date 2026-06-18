type PropType = {
  word: string;
}

export default function Word({ word }: PropType) {
  return (
    <>
      <div className="challenge">Word: {word}</div>
    </>
  );
}
