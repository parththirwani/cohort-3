import { useState } from "react"

function App() {
  const [title,setTitle]= useState("The random number is")

  function updateTitle(){
    setTitle("my name is "+ Math.random())
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title = {title}></Header>
      <Header title = "2"></Header>
    </div>
  )
}
//Memoization
const Header = React.memo(function Header({title}){
  return <div>
      {title}
  </div>
})
export default App
