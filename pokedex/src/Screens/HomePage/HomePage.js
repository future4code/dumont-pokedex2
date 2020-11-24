import React, { useContext } from "react";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import ContextPoke from "../../Contexts/ContextPoke";
import { useRequestData } from "../../Hooks/useRequestData";
import { DivCard } from "./styled";
import { baseUrl } from "../../Constant/url";
import { NavItem } from "react-bootstrap";

const HomePage = () => {
  const pokemon = useContext(ContextPoke);
  const getPokemons = useRequestData(`${baseUrl}`, undefined);
  return (
    <DivCard>
      {getPokemons &&
        getPokemons.results.map((item) => {
          return <CardPokemon url={item.url} />;
        })}
    </DivCard>
  );
};

export default HomePage;
