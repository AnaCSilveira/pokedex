import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  background: #4eaab4;
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  height: 600px;
  margin-right: 20%;
`;
export const StyledUl = styled.ul`
  background: #ebe3e7;
  display: flex;
  width: 200%;
  border-radius: 8px;
  height: 500px;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const Characteristics = styled.div`
  display: block;
`;

export const StyledH3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 8px;
`;

export const StyledP = styled.p`
margin: 5px
`
export const StyledLi = styled.li`
margin: 5px
`

export const StyledLink = styled(Link)`
color: inherit;
display:flex;
flex-direction: row-reverse;
margin: 8px;
font-size: 25px
`