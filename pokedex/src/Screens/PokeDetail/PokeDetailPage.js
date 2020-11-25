import React from "react";
import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"
import { baseUrl } from "../../Constant/url"
import image from "../../Assets/charmander.webp"
import {PokeDetails, PokeImg, DivPokeImg, DivPowers, DivMoves, DivMoveName, DivTypes, DivTypeAndMoves, Title} from "./styled"

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
            <DivPowers>
                <Title>Poderes</Title>
                {getDetails.stats.map(stat => {
                    return(
                    <p>{stat.stat.name}: {stat.base_stat}</p>
                    )
                })}
            </DivPowers>
            <DivTypeAndMoves>
            <DivTypes>
                <Title>Tipo</Title>
                {getDetails.types.map(type => {
                    return(
                    <p>{type.type.name}</p>
                    )
                    //poderia usar indexcomo parâmetro e fazer um curto cirtcuito setando apenas os 5 primeiros moves.
                })}
            </DivTypes>
            <DivMoves>
            <Title>Movimentos</Title>
            <DivMoveName>
            {getDetails.moves.map((move) => {
                console.log(move.move.name)
                return(
                <p>{move.move.name}</p>
                )
            })}
            </DivMoveName>
            </DivMoves>
            </DivTypeAndMoves>
        </PokeDetails>}
        </div>
    )
}

export default PokeDetailPage
