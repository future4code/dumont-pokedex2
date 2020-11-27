import React from "react";
import Logo from "../../Assets/Poké_Ball_icon.svg.png";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../Buttons/StyledButton";
import { NavBar, NavLink } from "./styled";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  const history = useHistory();

  //Troca o nome dos botões de acordo com a página renderizada. Props estão vindo do Router.
  const ButtonTitle = () => {
    switch (props.title) {
      case "Lista de pokemons":
        return "Pokedex";
      case "Pokedex":
        return "PokeList";
      default:
        return "Voltar";
    }
  };

  //Troca os títulos de acordo com a página renderizada. Props estão vindo do Router.
  const Title = () => {
    switch (props.title) {
      case "Lista de pokemons":
        return "PokeList";
      case "Pokedex":
        return "Pokedex";
      default:
        return "";
    }
  };


  return (
    <NavBar bg="primary" expand="lg">
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
