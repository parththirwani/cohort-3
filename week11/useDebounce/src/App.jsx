import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only rerun the effect if value or delay changes

  return debouncedValue;
};

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    // Expensive search operation only triggers when debouncedValue changes
    if (debouncedValue) {
      console.log("Search operation triggered with:", debouncedValue);
    }
  }, [debouncedValue]); // Runs only when debouncedValue changes

  return (
    <>
      <input type="text" value={inputVal} onChange={change} />
    </>
  );
}

export default App;
