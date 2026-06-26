type PropType = {
  word: string;
};

export default function Word({ word }: PropType) {
  return (
    <>
      <div className="text-xl p-[10px] challenge">Word: {word}</div>
    </>
  );
}
