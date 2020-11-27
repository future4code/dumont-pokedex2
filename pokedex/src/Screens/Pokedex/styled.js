import styled from "styled-components"

export const PokedexCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 83.5vh;
    height: 100%;

`
export const Messege = styled.p`
    font-family: "Pokemon Solid";
    color:#DC3545;
    margin: auto;
    font-size: 4em;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        text-align: center;
        font-size: 2em;
        margin-top: 7em;
        min-height: 59.5vh;
    }
`