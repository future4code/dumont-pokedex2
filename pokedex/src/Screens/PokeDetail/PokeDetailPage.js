import React from "react";
import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"
import { baseUrl } from "../../Constant/url"
import image from "../../Assets/charmander.webp"
import {PokeDetails, PokeImg, DivPokeImg, DivDetails, DivMoves, DivTypes, DivTypeAndMoves, Title} from "./styled"

const PokeDetailPage = () => {
    const params = useParams()
    const getDetails = useRequestData(`${baseUrl}/${params.pokeName}`, undefined)

    console.log(getDetails)
    return(
        <div>
            {getDetails &&
        <PokeDetails>
            <DivPokeImg>
                <PokeImg src={getDetails.sprites.front_default}/>
                <PokeImg src={getDetails.sprites.back_default}/>
            </DivPokeImg>
            <DivDetails>
                <Title>Poderes</Title>
                {getDetails.stats.map(stat => {
                    return(
                    <p>{stat.stat.name}: {stat.base_stat}</p>
                    )
                })}
            </DivDetails>
            <DivTypeAndMoves>
            <DivTypes>
                <Title>Tipo</Title>
                {getDetails.types.map(type => {
                    return(
                    <p>{type.type.name}</p>
                    )
                })}
            </DivTypes>
            <DivMoves>
            <h2>Principais Ataques</h2>
            {getDetails.moves.map((move, index) => {
                return(
                index < 5 ? <p>{move.move.name}</p> : null
                )
                //tirar o index e imprimir todos os moves e colocar numa caixa com uma barra de rolangem
            })}
            </DivMoves>
            </DivTypeAndMoves>
        </PokeDetails>}
        </div>
    )
}

export default PokeDetailPage
