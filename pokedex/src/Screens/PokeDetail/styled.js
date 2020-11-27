import styled from "styled-components"

export const PokeDetails = styled.main`
    height: 90vh;
    margin: 10px 10vw;
    display: flex;
    font-family: "Pokemon Solid";
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
    height: 33vh;
    /* background-color: rgb(220,53,69, 0.5); */
    border: 2px inset;

`

export const DivPowers = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    /* background-color: rgb(220,53,69, 0.5); */
    border: 2px inset;
`

export const Title = styled.h1`
    align-self: flex-start;
    color: #DC3545;

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
    height: 18%;
    display: flex;
    justify-content: space-around;
    /* background-color: rgb(220,53,69, 0.5); */
    border: 2px inset;
    align-items: center;
`


export const DivMoves = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    /* background-color: rgb(220,53,69, 0.5); */
    border: 2px inset;
`
export const DivMoveName = styled.div`
    overflow-y: auto;
`