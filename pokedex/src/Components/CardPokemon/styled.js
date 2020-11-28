import styled from "styled-components";
import background from "../../Assets/pokeball3.jpg";

export const CardContainer = styled.div`
  height: 52vh;
  background-image: url(${background});
  margin: 4em 1em 0 1em;
  border: 2px solid black;
  border-radius: 10px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    height: 47vh;
    margin: 2em 0px;
  }
`;

export const ImgContainer = styled.div`
  border-radius: 10px 10px 0px 0px;
  text-align: center;
`;

export const PokeImg = styled.img`
  width: 25vh;
  margin: 20px auto 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5%;
  bottom: 20px;
  width: 90%;
`;

export const PokeName = styled.p`
  position: absolute;
  color: black;
  font-size: 1.5em;
  font-family: "Pokemon Solid";
  left: 60px;
  top: 205px;
  z-index: 1;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    top: 230px; 
  }
`