import axios from 'axios'
import React, { useState } from 'react'

export default function JokeRetrieval() {

  const [joke, setJoke] = useState([])

  

  function getJoke(e){

      e.preventDefault()
      console.log("you clicked this function")

      fetch("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => response.json())
      .then((data) => {console.log(data);
      setJoke(data)}
      )
    }
  

  return (
    <div>
    <h1>Your daily dev joke</h1>

    <button onClick={getJoke}>
    click me
    </button>

    {joke.map((joke) =>
      { return (
        <div>
        <h1>{joke.question}</h1>
        <h2>{joke.punchline}</h2>
        </div>
      )})}
    </div>
  )
}

