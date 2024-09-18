import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  color: #eb942b;
  display:grid;
  grid-template-columns:200px 200px 200px 200px 200px;
  justify-content: center;
  padding: 20px

`;

export const Screen = styled.div`
  min-height: 100vh;
  background: #eedfc8;
`;

export const ItemList = styled.li`
  margin-bottom: 8px;
  font-size: 20px;
  
`;

export const Header = styled.header`
  background-color: #f05e35;
  min-height: 30vh;
  border-radius: 8px;
  
`;

export const Styledh1 = styled.h1`
  display: flex;
  font-size: 40px;
  justify-content: center;
  font-weight: bold;
  color: #fff2db;
  padding: 5%;
  text-shadow: black 0.1em 0.1em 0.2em
  
`;

export const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  color: black;
   
`;

export const StyledButton = styled.button`

font-weight: bold;
color: #f05e35;
margin: 0 1%
`