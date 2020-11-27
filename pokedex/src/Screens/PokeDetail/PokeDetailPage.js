import React from "react";
import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"
import { baseUrl } from "../../Constant/url"
import {PokeDetails, PokeImg, DivPokeImg, DivPowers, DivMoves, DivMoveName, DivTypes, DivTypeAndMoves, Title} from "./styled"
import HeaderDetails from "../../Components/Header/HeaderDetails"

const PokeDetailPage = () => {
    const params = useParams()
    const getDetails = useRequestData(`${baseUrl}/${params.pokeName}`, undefined)
    const newPokemon = {name: params.pokeName, url: `${baseUrl}/${params.pokeName}`}

    return(
        <div>
            <HeaderDetails pokeName={params.pokeName} pokemon= {newPokemon}
            />
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
