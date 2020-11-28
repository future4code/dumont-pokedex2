import React, {useContext} from "react";
import Pokelist from "../Pokelist/Pokelist"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { PokedexCard, Messege } from "./styled";


const PokedexPage = () => {
    const { states, setters } = useContext(GlobalStateContext)

    //Função de remover Pokemon da Pokedex e adicionar à Home
    const removePokemonFromPokedex = (newPokemon) => {
        const index = states.pokedex.findIndex((i) => i.name === newPokemon.name)
        let newPokeList = [...states.pokemons, newPokemon];
        states.pokedex.splice(index, 1)
        setters.setPokemons(newPokeList);
        alert(`${newPokemon.name} deixou sua pokedex!`)
    }

    return(
        //Se a pokedex estiver vazia, mostre a mensagem se não mostre a lista
        <PokedexCard>    
        {states.pokedex.length === 0 ?
        <Messege>Your Pokedex is empty!</Messege>
        :
        states.pokedex &&
        states.pokedex.map((pokemon) => {
        return <Pokelist url={pokemon.url} removePokemonFromPokedex={() => removePokemonFromPokedex(pokemon)} onPokedex={true}/>;
        })}
        </PokedexCard>
    )
}

export default PokedexPage
 