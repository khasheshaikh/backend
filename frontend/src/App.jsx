import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";



function App() {
  const [jokes, setJokes] = useState([])
  
 useEffect(() => {
   axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
      console.log(response.data)
    })
    .catch((error)=>{console.log(error)})
   
 })
 
  return (
    <>
    <div>
        <p>JOKES:</p>
    {
      jokes.map((jok,index)=>(
        <div key={jok.id}>
          <h3>{jok.title}</h3>
          <p>{jok.joke}</p>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default App
