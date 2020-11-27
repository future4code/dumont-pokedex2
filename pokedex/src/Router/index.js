import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Screens/HomePage/HomePage";
import Header from "../Components/Header/Header";
import PokeDetailPage from "../Screens/PokeDetail/PokeDetailPage";
import PokedexPage from "../Screens/Pokedex/PokedexPage";


const Router = () => {
  //Leva à HomePage
  const goToHomePage = (history) => {
    history.push("/");
  };

  //Leva à Pokedex
  const goToPokedex = (history) => {
    history.push("/pokedex");
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header title="Lista de pokemons" buttonFunction={goToPokedex} />
          <HomePage/>
        </Route>
        <Route exact path="/pokedetail/:pokeName">
          <PokeDetailPage />
        </Route>
        <Route exact path="/pokedex">
          <Header title="Pokedex" buttonFunction={goToHomePage} />
          <PokedexPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
