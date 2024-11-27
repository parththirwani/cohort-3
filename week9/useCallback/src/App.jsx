import { useCallback, useState, memo } from "react"
function App() {
  const [counter,setCounter]= useState(0)

  const a = useCallback(function(){
    console.log("Hello World")
  },[])
  return <div>
    <button onClick={() => {
      setCounter (counter+1)
    }}>Counter({counter})</button>
    <Demo a={a}></Demo>
  </div>
}

const Demo= memo(function({a}){
  console.log("rerender")
  return <div>
    hi there
  </div>
})
export default App
