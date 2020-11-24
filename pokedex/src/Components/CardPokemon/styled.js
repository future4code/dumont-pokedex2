import styled from "styled-components"

export const CardContainer = styled.div`
    height: 35vh;
    width: 250px;
    margin: 10px;
    display: grid;
    grid-template-rows: 90% 10%;
    margin-bottom: 2em;
`

export const ImgContainer = styled.div`
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokeImg = styled.img`
    height: 75%;
`

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`