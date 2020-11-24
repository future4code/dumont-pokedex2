import React from 'react';
import {CardContainer, ImgContainer, ButtonsContainer, PokeImg} from "./styled"



const CardPokemon = () => {
    return(
        <CardContainer>
            <ImgContainer>
                <PokeImg src="https://picsum.photos/100/100" alt="foto pokemon"/>
            </ImgContainer>
            <ButtonsContainer>
                <button>Adicionar a Pokedex</button>
                <button>Ver detalhes</button>
            </ButtonsContainer>
        </CardContainer>
    )
}

export default CardPokemon