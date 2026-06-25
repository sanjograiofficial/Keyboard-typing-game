import { useState } from "react";

interface PropType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function Name({ name, setName }: PropType) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (inputValue == "") return setError("Enter a valid name");
    setName(inputValue);
  };
  return (
    <div className="nameContainer">
      <h1>Enter your name: </h1>
      <input
        type="text"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="nameInput"
        onKeyDown={(e) => {
          if (e.key == "Enter") handleClick();
        }}
      />
      <button onSubmit={handleClick} className="nameSubmit">
        Confirm
      </button>
      {error && <div className="emptyName">{error}</div>}
    </div>
  );
}
