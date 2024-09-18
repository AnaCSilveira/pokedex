import { useState, useEffect } from "react";
import "./App.css";

import { List } from "./styles/App.styled";
import { Screen } from "./styles/App.styled";
import { ItemList } from "./styles/App.styled";
import { Header } from "./styles/App.styled";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Styledh1 } from "./styles/App.styled";
import { StyledLink } from "./styles/App.styled";
import { StyledButton} from "./styles/App.styled";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=70&offset=${offSet}`)
      .then((res) => res.json())
      .then((json) => setPokemon(json?.results));
  }, [offSet]);

  const updateOffSet = (number) => {
    setOffSet((currentOffSet) => {
      return currentOffSet + number;
    });
  };
  return (
    <>
      <Screen>
        <Header>
          <Styledh1>
            <FontAwesomeIcon icon={faBoltLightning} />
            Choose your Pokemon
          </Styledh1>
        </Header>
        <List>
          {pokemon.map((item) => {
            return (
              <ItemList key={item.name}>
                <StyledLink to={`/pokemon/${item.name}`}>
                  {item.name}{" "}
                </StyledLink>
              </ItemList>
            );
          })}
        </List>
        <StyledButton
          onClick={() => {
            updateOffSet(-70);
          }}
          disabled={offSet <= 0}
        >
          Prev
        </StyledButton>
        <StyledButton
          onClick={() => {
            updateOffSet(70);
          }}
        >
          Next
        </StyledButton>
      </Screen>
    </>
  );
}

export default App;
