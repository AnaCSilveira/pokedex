import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import PokemonPng from "./assets/pokemon.png";
import { StyledDiv } from "./styles/Pokemon.styled";
import { Image } from "./styles/Pokemon.styled";
import { StyledUl } from "./styles/Pokemon.styled";
import { Characteristics } from "./styles/Pokemon.styled";
import { StyledH3 } from "./styles/Pokemon.styled";
import { StyledP } from "./styles/Pokemon.styled";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { StyledLi } from "./styles/Pokemon.styled";
import { StyledLink } from "./styles/Pokemon.styled";

export default function Pokemon() {
  let { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((json) => setPokemonData(json));
  }, [id]);

  return (
    <StyledDiv>
      <Image src={PokemonPng} alt="pokemon image" />
      <Characteristics>
        <StyledUl>
          <StyledH3>Ability</StyledH3>

          {pokemonData?.abilities.map((item) => {
            return (
              <StyledLi key={item.ability.name}>{item.ability.name}</StyledLi>
            );
          })}

          <StyledH3>Characteristics</StyledH3>
          <StyledP>Height: {pokemonData?.height}</StyledP>
          <StyledP>Weight: {pokemonData?.weight}</StyledP>
          <StyledP>Gender: {pokemonData?.gender} </StyledP>
          <FontAwesomeIcon icon={faVenusMars} />

          <StyledH3>Image</StyledH3>
          <img src={pokemonData?.sprites.front_default} alt="" />
        </StyledUl>

        <StyledLink to={`/`}>
          <FontAwesomeIcon icon={faHouse} />
        </StyledLink>
      </Characteristics>
    </StyledDiv>
  );
}
