import Button from "./Button";
import Typo from "./Error";
import InputField from "./InputField";
import Score from "./Score";
import Timer from "./Timer";
import Word from "./Word";

interface PropType {
  gameStart: boolean;
  isLost: boolean;
  handleGameStart: () => void;
  word: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  getData: () => void;
  setFlash: React.Dispatch<React.SetStateAction<boolean>>;
  setTypoFlash: React.Dispatch<React.SetStateAction<boolean>>;
  typoCount: number;
  setTypoCount: React.Dispatch<React.SetStateAction<number>>;
  setIsLost: React.Dispatch<React.SetStateAction<boolean>>;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  flash: boolean;
  typoFlash: boolean;
}
export default function GameStart({
  gameStart,
  isLost,
  handleGameStart,
  word,
  score,
  setScore,
  getData,
  setFlash,
  setTypoFlash,
  typoCount,
  setTypoCount,
  setIsLost,
  setGameStart,
  flash,
  typoFlash,
}: PropType) {
  return (
    <div className="gameBox">
      <Timer setGameStart={setGameStart} />
      <Button
        gameStart={gameStart}
        isLost={isLost}
        handleClick={handleGameStart}
      />
      <Word word={word} />
      <InputField
        word={word}
        score={score}
        setScore={setScore}
        fetchData={getData}
        setFlash={setFlash}
        setTypoFlash={setTypoFlash}
        typoCount={typoCount}
        setTypoCount={setTypoCount}
        setIsLost={setIsLost}
        setGameStart={setGameStart}
      />
      <Score score={score} flash={flash} />
      <Typo typoCount={typoCount} typoFlash={typoFlash} />
    </div>
  );
}
