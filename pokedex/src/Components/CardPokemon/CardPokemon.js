import React from 'react';
import { useHistory } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData";
import {CardContainer, ImgContainer, ButtonsContainer, PokeImg} from "./styled"

function CardPokemon(props) {
    const pokemon = useRequestData(props.url, undefined)
    const history = useHistory();

    const goToPokeDetailsPage = (history, pokeName) => {
        history.push(`/pokedetail/${pokeName}`); 
    }

    return(
        <div>
        {pokemon && <CardContainer>
        <ImgContainer>
                <PokeImg src={pokemon.sprites.front_default}/>
            </ImgContainer>
            <ButtonsContainer>
                <button>Adicionar a Pokedex</button>
                <button onClick={() => goToPokeDetailsPage(history, pokemon.name)}>Ver detalhes</button>
            </ButtonsContainer>
        </CardContainer>}
        </div>
    )
}

export default CardPokemon