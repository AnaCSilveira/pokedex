import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => setPokemon(json?.results));
  }, []);
  return (
    <>
      <div>
        <ul>
          {pokemon.map((item) => {
            return <li key={item.name}>{item.name}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
