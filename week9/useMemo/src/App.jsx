import { useMemo, useState } from "react";

//useMemo
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1)

  function increaseCount(){
    setCounter(counter+1)
  }
  let count = useMemo(()=> {
  let finalCount = 0
  for (let i=1 ; i<= inputValue; i++){
    finalCount = finalCount+i
  }
  return finalCount
},[inputValue])
  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value)
      }} placeholder={"Find the sum from 1 to n"} />
      <br />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br></br>
      <br></br>
      <button onClick={increaseCount}>Increase Count {counter}</button>
    </div>
  );
}
export default App;
