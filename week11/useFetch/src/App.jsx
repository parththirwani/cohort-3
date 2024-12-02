import { useState } from "react";
import usePostTitle from "./hooks/useFetch";
import useFetch from "./hooks/useFetch";

function App() {
  const[curerentPost, setCurrrentPost] = useState(1)
  const { finalData, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/" + curerentPost, 10);

  if (loading){
    return<div>
      Loading...
    </div>
  }

  return (
    <div>
      <button onClick={()=> setCurrrentPost(1)}>Post 1</button>
      <button onClick={()=> setCurrrentPost(2)}>Post 2</button>
      <button onClick={()=> setCurrrentPost(3)}>Post 3</button>
      {JSON.stringify(finalData.title)}
    </div>
  );
}

export default App;
