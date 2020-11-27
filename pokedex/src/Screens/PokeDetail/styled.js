import styled from "styled-components";

export const PokeDetails = styled.main`
  height: 90vh;
  margin: 10px 10vw;
  display: flex;
  font-family: "Pokemon Solid";
  justify-content: space-evenly;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
      flex-direction: column;
      height: 100%;
  }
`;

export const DivPokeImg = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PokeImg = styled.img`
  height: 33vh;
  border: 2px inset;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    height: 40.5vh;  
  }
`;

export const DivPowers = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  border: 2px inset;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
      padding: 20px 0;
      text-align: center;
  }
`;

export const Title = styled.h1
    align-self: flex-start;
    color: #007bff;
    @meda (min-device-width: 320px) and (max-device-width: 420px) {
      align-self: center;
  }
`;

export const DivTypeAndMoves = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivTypes = styled.div`
  height: 18%;
  display: flex;
  justify-content: space-around;
  border: 2px inset;
  align-items: center;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    height: 15vh;  
  }
`;

export const DivMoves = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  border: 2px inset;
`;

export const DivMoveName = styled.div`
  padding-top: 4em;
`;