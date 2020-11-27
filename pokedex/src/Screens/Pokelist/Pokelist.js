import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import GlobalStateContext from "../../Global/GlobalStateContext";

const Pokelist = (props) => {
  const { states, setters } = useContext(GlobalStateContext);

  //Requisição da APi através da URL do pokemon
  const pokemon = useRequestData(props.url, undefined);

  const history = useHistory();

  //Função de Adicionar Pokemon na Pokedex e remover da HOme
  const addPokemonToPokedex = (newPokemon) => {
    const index = states.pokemons.findIndex((i) => i.name === newPokemon.name);

    let newPokedex = [...states.pokedex, newPokemon];
    states.pokemons.splice(index, 1);
    setters.setPokedex(newPokedex);

    alert(`${newPokemon.name} agora está na sua pokedex!`);
  };

  // leva a página de Detalhes do Pokémon escolhido
  const goToPokeDetailsPage = (history, pokeName) => {
    history.push(`/pokedetail/${pokeName}`);
  };

  return (
      //Se pokemon exister (for true) renderize o card.
    <div>
      {pokemon && (
        <CardPokemon
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          goTo={() => addPokemonToPokedex(props.item)}
          goToDetails={() => goToPokeDetailsPage(history, pokemon.name)}
          removePokemonFromPokedex={props.removePokemonFromPokedex}
          onPokedex={props.onPokedex}
        />
      )}
    </div>
  );
};

export default Pokelist;
