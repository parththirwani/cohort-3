import { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [todos,setTodos]= useState([]);

  useEffect((id) =>{
    const res = axios.get("")  //url
      .then(function(response){
        setTodos(response.data.todos)
      })

  },[]);
  return (
      <div>
        {todos.map(todo => <Todo title = {todo.title} description= {todo.description} />)}
      </div>
  )
}

function Todo({title,description}){
  return
  <div>
    <h1>
      {title}
    </h1>
    <h2>
      {description}
    </h2>
  </div>
}
export default App
