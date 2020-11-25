import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData";
import {CardContainer, ImgContainer, ButtonsContainer, PokeImg} from "./styled"

function CardPokemon(props) {
    const [onPokedex, setOnPokedex] = useState(true)
    const pokemon = useRequestData(props.url, undefined)
    const history = useHistory();


    const goToPokeDetailsPage = (history, pokeName) => {
        history.push(`/pokedetail/${pokeName}`); 
        setOnPokedex(!onPokedex)
    }

    return(
        <div>
        {pokemon && <CardContainer>
        <ImgContainer>
                <PokeImg src={pokemon.sprites.front_default}/>
            </ImgContainer>
            <ButtonsContainer>
                {onPokedex ? <button onClick={props.goToPokedex}>Adicionar a Pokedex</button>
                :
                <button>Remover</button>}
                <button onClick={() => goToPokeDetailsPage(history, pokemon.name)}>Ver detalhes</button>
            </ButtonsContainer>
        </CardContainer>}
        </div>
    )
}

export default CardPokemon