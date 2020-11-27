import React,{useContext} from "react";
import Logo from "../../Assets/Poké_Ball_icon.svg.png";
import { useHistory, useParams } from "react-router-dom";
import { StyledButton } from "../Buttons/StyledButton";
import { NavBar, NavLink } from "./styled";
import { Navbar, Nav } from "react-bootstrap";
import GlobalStateContext from "../../Global/GlobalStateContext"


const Header = (props) => {
  const history = useHistory();
  const { states, setters} = useContext(GlobalStateContext)


  const goBack = () => {
    history.goBack();
  };

  const indexOfPokedex = states.pokedex.findIndex((i) => i.name === props.pokemon.name)

  const verifyToAddOrRemove = (pokemon) => {
    const indexPokedex = states.pokedex.findIndex((i) => i.name === pokemon.name)
    const indexPokeList = states.pokemons.findIndex((i) => i.name === pokemon.name) 
    
    let newPokedex = [...states.pokedex];
    let newPokemons = [...states.pokemons];

    if(indexPokedex === -1) {
        newPokedex.push(pokemon)
        newPokemons.splice(indexPokeList, 1)
        window.alert("O Pokémon foi adicionado a sua Pokedex!")
    }else {
        newPokedex.splice(indexPokedex, 1)
        newPokemons.push(pokemon)
        window.alert("O Pokémon foi removido da sua Pokedex!")
    }
    setters.setPokedex(newPokedex);
    setters.setPokemons(newPokemons)
}

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
            <StyledButton onClick={() => verifyToAddOrRemove(props.pokemon)}>
              {indexOfPokedex === -1 ? "Adicionar da Pokedex": "Remover a Pokedex"}
            </StyledButton>
          <img src={Logo} width="50" alt="Pokdex logo" className="ml-3" />
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  );
};

export default Header;
