import { useState } from "react";

function App() {
  return (
    <>
      <LightBulb />
    </>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
  return (
    <div>
      <button
        onClick={() => {
          setBulbOn((currentState) => !currentState);
        }}
      >
        Toggle the bulb
      </button>
    </div>
  );
}

export default App;
