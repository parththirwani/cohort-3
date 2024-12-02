import { useState } from "react"
import { usePrev } from "./usePrev"
function App() {
  const [count, setCount] = useState(0)
  const prev = usePrev(count)
  return (
    <>
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase Count</button>
      <p>The previous count was {prev}</p>
    </>
  )
}

export default App
