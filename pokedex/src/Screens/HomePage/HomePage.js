import React from "react";
import styled from 'styled-components';
import CardPokemon from "../../Components/CardPokemon/CardPokemon";

const DivCard = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`

const HomePage = () => {
    return(
        <DivCard>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
        </DivCard>
    )
}

export default HomePage