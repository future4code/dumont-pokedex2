import React from 'react';
import {CardContainer, ImgContainer, ButtonsContainer, PokeImg} from "./styled"

function CardPokemon(props) {
    return(
        <div>
        <CardContainer>
        <ImgContainer>
                <PokeImg src={props.image}/>
            </ImgContainer>
            <ButtonsContainer>
                {props.onPokedex ? <button onClick={props.goTo}>Adicionar a Pokedex</button>
                :
                <button>Remover</button>}
                <button onClick={props.goToDetails}>Ver detalhes</button>
            </ButtonsContainer>
        </CardContainer>
        </div>
    )
}

export default CardPokemon