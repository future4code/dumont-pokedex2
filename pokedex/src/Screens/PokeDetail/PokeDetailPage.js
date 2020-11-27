import React, {useContext, useState} from "react";
import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"
import { baseUrl } from "../../Constant/url"
import {PokeDetails, PokeImg, DivPokeImg, DivPowers, DivMoves, DivMoveName, DivTypes, DivTypeAndMoves, Title} from "./styled"
import HeaderDetails from "../../Components/Header/HeaderDetails"
import GlobalStateContext from "../../Global/GlobalStateContext"

const PokeDetailPage = () => {
    const params = useParams()
    const { states, setters} = useContext(GlobalStateContext)
    const getDetails = useRequestData(`${baseUrl}/${params.pokeName}`, undefined)
    const [onPokedex, setonPokedex] = useState()
    const newPokemon = {name: params.pokeName, url: `${baseUrl}/${params.pokeName}`}

    const verifyToAddOrRemove = (newPokemon) => {
        const indexPokedex = states.pokedex.findIndex((i) => i.name === newPokemon.name)
        const indexPokeList = states.pokemons.findIndex((i) => i.name === newPokemon.name) 
        
        let newPokedex = [...states.pokedex];
        let newPokemons = [...states.pokemons];

        if(indexPokedex === -1) {
            newPokedex.push(newPokemon)
            setonPokedex(true)
            newPokemons.splice(indexPokeList, 1)
            window.alert("O Pokémon foi adicionado a sua Pokedex!")
        }else {
            newPokedex.splice(indexPokedex, 1)
            newPokemons.push(newPokemon)
            setonPokedex(false)
            window.alert("O Pokémon foi removido da sua Pokedex!")
        }
        setters.setPokedex(newPokedex);
        setters.setPokemons(newPokemons)
    }

    return(
        <div>
            <HeaderDetails pokeName={params.pokeName} verify= {() => verifyToAddOrRemove(newPokemon)}
            onPokedex={onPokedex}
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
