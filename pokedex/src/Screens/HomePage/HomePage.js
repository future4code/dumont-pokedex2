import React, { useContext } from "react";
import Pokelist from "../Pokelist/Pokelist";
import { DivCard } from "./styled";
import GlobalStateContext from "../../Global/GlobalStateContext"

const HomePage = () => {
  const { states} = useContext(GlobalStateContext)

  return (
    <DivCard>
      {states.pokemons &&
        states.pokemons.map((item) => {
          return <Pokelist url={item.url} item={item} onPokedex={false}/>
        })}
    </DivCard>
  );
};

export default HomePage;
