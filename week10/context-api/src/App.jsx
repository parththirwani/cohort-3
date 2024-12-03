import React, { createContext, useContext, useState } from 'react';

// Create the context
export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <Count />
      </div>
    </CountContext.Provider>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext); // Extract count from context
  return <div>Count: {count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext); // Extract count and setCount
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
