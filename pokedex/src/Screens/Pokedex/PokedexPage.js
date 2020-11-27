import React, {useContext} from "react";
import { useHistory } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import Pokelist from "../Pokelist/Pokelist"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { PokedexCard, Messege } from "./styled";


const PokedexPage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    console.log(states.pokedex)
    const removePokemonFromPokedex = (pokemonToRemove) => {
        const index = states.pokedex.findIndex((i) => i.name === pokemonToRemove.name)

        let newPokedex = [...states.pokedex];
        let newPokemons = [...states.pokemons];

        newPokedex.splice(index, 1)
        newPokemons.push(pokemonToRemove)

        setters.setPokedex(newPokedex);
        setters.setPokemons(newPokemons)

        alert(`${pokemonToRemove.name} deixou sua pokedex!`)
    }

    return(
        <PokedexCard>
        {states.pokedex.length === 0 ?
        <Messege>Sua pokedex está vazia!</Messege>
        :
        states.pokedex &&
        states.pokedex.map((pokemon) => {
        return <Pokelist url={pokemon.url} removePokemonFromPokedex={() => removePokemonFromPokedex(pokemon)} onPokedex={true}/>;
        })}
        </PokedexCard>
    )
}

export default PokedexPage
 