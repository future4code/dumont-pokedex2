import styled from "styled-components";

export const PokeDetails = styled.main`
  height: 90vh;
  margin: 10px 10vw;
  display: flex;
  font-size: 14px;
  font-family: 'Press Start 2P', cursive;;
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

export const Title = styled.h1`
    font-size: 1.9em;
    align-self: flex-start;
    padding-top: 10px;
    color: #007bff;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
      align-self: center;
      padding-bottom: 10px;
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
  padding-top:10px;
  justify-content: space-around;
  border: 2px inset;
  align-items: center;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 20px 0;
    flex-direction: column;
    height: 20vh;  
  }
`;

export const DivMoves = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: space-around;
  border: 2px inset;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
      padding: 20px 0;
      text-align: center;
  }
`;
