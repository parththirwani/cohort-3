import { useState, useEffect } from "react";

// export default function usePostTitle() {
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   async function getPosts() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       const json = await response.json();
//       setPost(json);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return { post, loading, error };
// }

export default function useFetch(url , retryTime){
  const [finalData, setfinalData] = useState({})
  const [loading , setLoading] = useState(false)

  async function getDetails(){
    setLoading(true)
    const res = await fetch (url)
    const json = await res.json()
    setfinalData(json);
    setLoading(false)
  }

  useEffect(() =>{
    getDetails()
  },[url])

  useEffect(() => {
    setInterval(getDetails, retryTime*1000)
  },[])

  return {
    finalData,
    loading
  }
  
}