import React from "react";
import {
  CardContainer,
  ImgContainer,
  ButtonsContainer,
  PokeImg,
  PokeName
} from "./styled";
import { Card } from "react-bootstrap";
import { StyledButtonCard } from "../Buttons/StyledButtonCard";

function CardPokemon(props) {

  return (
    <div>
      <CardContainer>
        <Card style={{ width: "15rem" }} bg="transparent" className="h-100">
          <ImgContainer>
            <PokeImg src={props.image} className="text-align" />
          </ImgContainer>
         <PokeName>{props.name}</PokeName>
          <Card.Body>
            <ButtonsContainer>
              {/* Renderiza os textos os botões de acordo com a página atual  */}
              {props.onPokedex ? (
                <StyledButtonCard onClick={props.removePokemonFromPokedex}>
                  Remove Pokemon
                </StyledButtonCard>
              ) : (
                <StyledButtonCard onClick={props.goTo}>
                  Add to Pokedex
                </StyledButtonCard>
              )}
              <StyledButtonCard onClick={props.goToDetails}>
                See Details
              </StyledButtonCard>
            </ButtonsContainer>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
}

export default CardPokemon;
