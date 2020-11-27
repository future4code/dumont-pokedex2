import styled from "styled-components";
import background from "../../Assets/pokeball3.jpg";

export const CardContainer = styled.div`
  height: 50vh;
  background-image: url(${background});
  margin: 3em 10px;
  border: 2px solid black;
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  border-radius: 10px 10px 0px 0px;
  text-align: center;
`;

export const PokeImg = styled.img`
  width: 25vh;
  margin: 20px auto;
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
