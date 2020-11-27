import React from "react";
import Logo from "../../Assets/Poké_Ball_icon.svg.png";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../Buttons/StyledButton";
import { NavBar, NavLink } from "./styled";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  const history = useHistory();

  const ButtonTitle = () => {
    switch (props.buttonTitle) {
      case "Lista de pokemons":
        return "Pokedex";
      case "Pokedex":
        return "PokeList";
      default:
        return "Voltar";
    }
  };

  const Title = () => {
    switch (props.buttonTitle) {
      case "Lista de pokemons":
        return "PokeList";
      case "Pokedex":
        return "Pokedex";
      default:
        return "";
    }
  };


  return (
    <NavBar bg="danger" expand="lg">
      <Navbar.Brand>
        <img src={Logo} width="50" alt="Pokdex logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <StyledButton onClick={() => props.buttonFunction(history)}>
            {ButtonTitle()}
          </StyledButton>
        </Nav>
        <NavLink>{Title()}</NavLink>
        <Nav className="ml-auto">
          <img src={Logo} width="50" alt="Pokdex logo" className="ml-3" />
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  );
};

export default Header;
