import React from 'react';
import styled from "styled-components"

const CardContainer = styled.div`
    height: 35vh;
    width: 250px;
    margin: 10px;
    display: grid;
    grid-template-rows: 90% 10%;
    margin-bottom: 2em;
`

const ImgContainer = styled.div`
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PokeImg = styled.img`
    height: 75%;
`

const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

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