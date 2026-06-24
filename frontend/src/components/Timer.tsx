import { useEffect, useState, type SetStateAction } from "react";

interface PropType {
  setGameStart: React.Dispatch<SetStateAction<boolean>>;
}

export default function Timer({ setGameStart }: PropType) {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (min === 0 && sec === 0) {
        clearInterval(interval);
        setGameStart(false);
        return;
      }

      if (sec === 0) {
        setMin(min - 1);
        setSec(59);
      } else {
        setSec(sec - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [min, sec]);

  return (
    <div className="timer">
      <div className="time">
        {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
      </div>
    </div>
  );
}
