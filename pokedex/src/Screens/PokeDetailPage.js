import React from "react";
import image from "../Assets/charmander.webp"
import {PokeDetails, PokeImg, DivPokeImg, DivDetails, DivMoves, DivTypes, DivTypeAndMoves, Title} from "./styled"

const PokeDetailPage = () => {
    return(
        <PokeDetails>
            <DivPokeImg>
                <PokeImg src={image}/>
                <PokeImg src={image}/>
            </DivPokeImg>
            <DivDetails>
                <Title>Poderes</Title>
                <p>hp: 58</p>
                <p>attack: 64</p>
                <p>defense: 58</p>
                <p>special-attack: 80</p>
                <p>special-defense: 65</p>
                <p>speed: 80</p>
            </DivDetails>
            <DivTypeAndMoves>
            <DivTypes>
                <Title>Tipo</Title>
            </DivTypes>
            <DivMoves>
            <h2>Principais Ataques</h2>
            <p>ataque</p>
            <p>ataque</p>
            <p>ataque</p>
            <p>ataque</p>
            <p>ataque</p>
            </DivMoves>
            </DivTypeAndMoves>
        </PokeDetails>
    )
}

export default PokeDetailPage
