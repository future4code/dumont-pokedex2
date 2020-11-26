import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData";
import CardPokemon from "../../Components/CardPokemon/CardPokemon"
import GlobalStateContext from "../../Global/GlobalStateContext"



const Pokelist = (props) => {
    const { states, setters} = useContext(GlobalStateContext)
    const pokemon = useRequestData(props.url, undefined)
    const history = useHistory();
    const [onPokedex, setOnPokedex] = useState(true)

    const addPokemontoPokedex = (newPokemon) => {
        const index = states.pokemons.findIndex((i) => i.name === newPokemon.name)
        let newPokedex = [...states.pokedex];
        let newPokemons = [...states.pokemons];
        newPokedex.push(newPokemon)
        newPokemons.splice(index, 1)
        setters.setPokedex(newPokedex);
        setters.setPokemons(newPokemons)
        alert(`${newPokemon.name} agora está na sua pokedex!`)
      }

const goToPokeDetailsPage = (history, pokeName) => {
    history.push(`/pokedetail/${pokeName}`); 
    setOnPokedex(!onPokedex)
}

return(
    <div>
    {pokemon &&
    <CardPokemon
        image={pokemon.sprites.front_default}
        goTo={() => addPokemontoPokedex(props.item)}
        goToDetails={() => goToPokeDetailsPage(history, pokemon.name)}
        onPokedex= {onPokedex}
    />
    }
    </div>
)

}

export default Pokelist