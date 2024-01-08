import { useRef, useState } from "react";

export default function Player() {
  const inputRef = useRef(null);

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  

  function handelClick() {
    setEnteredPlayerName( inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input
          ref={inputRef}
        
          type="text"
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
