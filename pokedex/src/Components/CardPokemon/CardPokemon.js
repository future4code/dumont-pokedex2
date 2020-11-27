import React from "react";
import {
  CardContainer,
  ImgContainer,
  ButtonsContainer,
  PokeImg,
} from "./styled";
import {Card} from "react-bootstrap"
import { StyledButtonCard } from "../Buttons/StyledButtonCard";

function CardPokemon(props) {
  return (
    <div>
      <CardContainer>
        <Card style={{ width: "15rem" }} bg="transparent" className= "h-100">
          <ImgContainer>
          <PokeImg src= {props.image} className="text-align"/>
          </ImgContainer>
          <Card.Body>
          <ButtonsContainer>
          {props.onPokedex ? (
            <StyledButtonCard onClick={props.removePokemonFromPokedex}>
              Remover Pokemon
            </StyledButtonCard>
          ) : (
            <StyledButtonCard onClick={props.goTo}>
              Adicionar à Pokedex
            </StyledButtonCard>
          )}
          <StyledButtonCard onClick={props.goToDetails}>
            Ver Detalhes
          </StyledButtonCard>
        </ButtonsContainer>
          </Card.Body>
        </Card>

        {/* <ImgContainer>
          <PokeImg src={props.image} />
        </ImgContainer>
        <ButtonsContainer>
          {props.onPokedex ? (
            <StyledButtonCard onClick={props.removePokemonFromPokedex}>
              Remover
            </StyledButtonCard>
          ) : (
            <StyledButtonCard onClick={props.goTo}>
              Adicionar a Pokedex
            </StyledButtonCard>
          )}

          <StyledButtonCard onClick={props.goToDetails}>
            Ver detalhes
          </StyledButtonCard>
        </ButtonsContainer> */}
      </CardContainer>
    </div>
  );
}

export default CardPokemon;
