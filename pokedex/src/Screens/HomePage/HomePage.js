import React, { useContext, useEffect } from "react";
import Pokelist from "../Pokelist/Pokelist";
import { DivCard } from "./styled";
import GlobalStateContext from "../../Global/GlobalStateContext"

const HomePage = () => {
  const { states, requests } = useContext(GlobalStateContext)
  
  useEffect(() => {
    requests.getPokemons();
  }, [requests.getPokemons]);


  return (
    <DivCard>
      {states.pokemons &&
        states.pokemons.map((item) => {
          return <Pokelist url={item.url} item={item}/>;
        })}
    </DivCard>
  );
};

export default HomePage;
