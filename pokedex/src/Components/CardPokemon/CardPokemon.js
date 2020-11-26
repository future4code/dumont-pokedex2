import React from "react";
import {
  CardContainer,
  ImgContainer,
  ButtonsContainer,
  PokeImg,
} from "./styled";
import { StyledButtonCard } from "../Buttons/StyledButtonCard";



function CardPokemon(props) {
  return (
    <div>
      <CardContainer>
        <ImgContainer>
          <PokeImg src={props.image} />
        </ImgContainer>
        <ButtonsContainer>
          {props.onPokedex ? (
            <StyledButtonCard onClick={props.removePokemonFromPokedex}>Remover</StyledButtonCard>
          ) : (
            <StyledButtonCard onClick={props.goTo}>
              Adicionar a Pokedex
            </StyledButtonCard> )}

          <StyledButtonCard onClick={props.goToDetails}>Ver detalhes</StyledButtonCard>
        </ButtonsContainer>
      </CardContainer>
    </div>
  );
}

export default CardPokemon;
