import styled from "styled-components"

export const PokedexCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100%;

`
export const Messege = styled.p`
    font-family: 'Press Start 2P', cursive;
    color:#007bff;
    margin: 4em auto;
    font-size: 2em;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        text-align: center;
        font-size: 2em;
    }
`