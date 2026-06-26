import { useState } from "react";

interface PropType {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function Name({ setName }: PropType) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (inputValue == "") return setError("Enter a valid name");
    setName(inputValue);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1>Enter your name: </h1>
      <input
        type="text"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-xl p-[10px] w-[40vw] border-4 input"
        onKeyDown={(e) => {
          if (e.key == "Enter") handleClick();
        }}
      />
      <button
        onClick={handleClick}
        className="text-xl p-[10px] w-[40vw] border-4 bg-gray-500 start-btn"
      >
        Confirm
      </button>
      {error && <div className="text-red-500 py-3">Enter a valid name</div>}
    </div>
  );
}
