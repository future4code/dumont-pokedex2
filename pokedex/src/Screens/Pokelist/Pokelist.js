import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData";
import CardPokemon from "../../Components/CardPokemon/CardPokemon"


const Pokelist = (props) => {
    const pokemon = useRequestData(props.url, undefined)
    const history = useHistory();
    const [onPokedex, setOnPokedex] = useState(true)



const goToPokeDetailsPage = (history, pokeName) => {
    history.push(`/pokedetail/${pokeName}`); 
    setOnPokedex(!onPokedex)
}

return(
    <div>
    {pokemon &&
    <CardPokemon
        image={pokemon.sprites.front_default}
        goTo={props.goToPokedex}
        goToDetails={() => goToPokeDetailsPage(history, pokemon.name)}
        onPokedex= {onPokedex}
    />
    }
    </div>
)

}

export default Pokelist