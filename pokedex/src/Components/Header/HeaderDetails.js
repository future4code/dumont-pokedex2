import React from "react";
import Logo from "../../Assets/Poké_Ball_icon.svg.png";
import { useHistory, useParams } from "react-router-dom";
import { StyledButton } from "../Buttons/StyledButton";
import { NavBar, NavLink } from "./styled";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

   return (
    <NavBar bg="danger" expand="lg">
      <Navbar.Brand>
        <img src={Logo} width="50" alt="Pokdex logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <StyledButton onClick={goBack}>
              Voltar
          </StyledButton>
        </Nav>
        <NavLink>{props.pokeName}</NavLink>
        <Nav className="ml-auto">
            <StyledButton onClick={props.verify}>
              Adicionar/Remover da Pokedex
            </StyledButton>
          <img src={Logo} width="50" alt="Pokdex logo" className="ml-3" />
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  );
};

export default Header;
