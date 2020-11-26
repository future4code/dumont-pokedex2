import React, {useContext} from "react";
import { useHistory } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import Pokelist from "../Pokelist/Pokelist"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { PokedexCard } from "./styled";


const PokedexPage = (props) => {
    const history = useHistory();
    const { states, setters, requests } = useContext(GlobalStateContext)
    const pokemon = useRequestData(props.url, undefined)


    const goToPokeDetailsPage = (history, pokeName) => {
        history.push(`/pokedetail/${pokeName}`); 
    }

    return(
        <PokedexCard>
        {states.pokedex &&
        states.pokedex.map((pokemon) => {
        return <Pokelist url={pokemon.url}/>;
        })}
        </PokedexCard>
    )
}

export default PokedexPage
 