import { useState } from "react";
import Word from "./components/Word";
import Button from "./components/Button";

export default function App() {
  const [word, setWord] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://api.api-ninjas.com/v2/randomword", {
      headers: {
        "X-API-Key": import.meta.env.VITE_API_KEY,
      },
    });
    const data = await response.json();
    console.log(data[0]);
    
    setWord(data.word || data[0]);
  };
  return (
    <>
      <Word word={word} />
      <Button fetchData={fetchData} />
    </>
  );
}
