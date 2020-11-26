import styled from "styled-components"
import background from "../../Assets/pokeball3.jpg"

export const CardContainer = styled.div`
    height: 35vh;
    width: 250px;
    margin: 3em 10px;
    display: grid;
    grid-template-rows: 90% 10%;
    border: 2px solid black;
    border-radius: 10px 10px 0px 0px;
`

export const ImgContainer = styled.div`
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0px 0px;

`

export const PokeImg = styled.img`
    width: 50%;
`

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`