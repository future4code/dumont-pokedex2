import React, { useContext } from "react";
import Logo from "../../Assets/Poké_Ball_icon.svg.png";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../Buttons/StyledButton";
import { NavBar, NavLink } from "./styled";
import { Navbar, Nav } from "react-bootstrap";
import GlobalStateContext from "../../Global/GlobalStateContext";

const Header = (props) => {
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);

  //Volta para página anterior
  const goBack = () => {
    history.goBack();
  };

  //Encontra a posição do pokemon no array da pokedex
  const indexOfPokedex = states.pokedex.findIndex(
    (i) => i.name === props.pokemon.name
  );

  //Verifica se o pokemón está na pokedex, se estiver remove e não estiver adiciona
  const verifyToAddOrRemove = (pokemon) => {
    const indexPokedex = states.pokedex.findIndex(
      (i) => i.name === pokemon.name
    );
    const indexPokeList = states.pokemons.findIndex(
      (i) => i.name === pokemon.name
    );

    if (indexPokedex === -1) {
      let newPokedex = [...states.pokedex, pokemon];
      states.pokemons.splice(indexPokeList, 1);
      setters.setPokedex(newPokedex);
      window.alert("O Pokémon foi adicionado a sua Pokedex!");
    } else {
      let newPokemons = [...states.pokemons, pokemon];
      states.pokedex.splice(indexPokedex, 1);
      setters.setPokemons(newPokemons);
      window.alert("O Pokémon foi removido da sua Pokedex!");
    }
  };

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand>
        <img src={Logo} width="50" alt="Pokdex logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand>
      <NavLink>It's {props.pokeName}!</NavLink>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <StyledButton onClick={goBack}>Go back!</StyledButton>
          <StyledButton onClick={() => verifyToAddOrRemove(props.pokemon)}>
            {/* Verifica se o pokemon está na pokedex e renderiza o texto certo ao botão */}
            {indexOfPokedex === -1
              ? "Add this!"
              : "Remove this!"}
          </StyledButton>
          </Nav>
          <Nav>
          <img src={Logo} width="50" alt="Pokdex logo" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
