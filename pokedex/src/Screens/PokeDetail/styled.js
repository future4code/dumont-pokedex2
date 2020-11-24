import styled from "styled-components"

export const PokeDetails = styled.main`
    height: 80vh;
    margin: 20px 10vw;
    display: flex;
    justify-content: space-evenly;
`

export const DivPokeImg = styled.div`
    align-self: center;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PokeImg = styled.img `
    height: 25vh;
`

export const DivDetails = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

export const Title = styled.h2`
    align-self: center;
`

export const DivTypeAndMoves = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DivTypes = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-around;
`


export const DivMoves = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`