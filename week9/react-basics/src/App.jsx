import { useState } from 'react'


//useState
function App() {
  return <div>
    <Counter></Counter>
  </div>
}

function Counter(){
  const [count, setCount] = useState(0)
  function increaseCount(){
    setCount (count + 1);
  }
  function decreaseCount(){
    setCount(count-1)
  }
  function resetCount(){
    setCount(count-count)
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>
}
export default App



//useEffect

// import { useState , useEffect} from 'react'

// function App() {
//   return <div>
//     <Counter></Counter>
//   </div>
// }

// function Counter(){
//   const [count, setCount] = useState(0)
//   useEffect(function(){
//     setInterval(function(){
//       setCount(count=>count+1)
//   },1000)
// },[]);

//   return <div>
//     <h1>{count}</h1>
//   </div>
// }
// export default App




