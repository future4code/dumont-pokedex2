import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Screens/HomePage/HomePage";
import Header from "../Components/Header/Header";
import PokeDetailPage from "../Screens/PokeDetail/PokeDetailPage";
import PokedexPage from "../Screens/Pokedex/PokedexPage";

const Router = () => {
  const goBack = (history) => {
    history.goBack();
  };

  const goToHomePage = (history) => {
    history.push("/");
  };

  const goToPokedex = (history) => {
    history.push("/pokedex");
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header buttonTitle="Lista de pokemons" buttonFunction={goToPokedex} />
          <HomePage />
        </Route>
        <Route exact path="/pokedetail/:pokeName">
          <Header
            buttonTitle=""
            buttonFunction={goBack}
            buttonDetailPage={goToPokedex}
          />
          <PokeDetailPage />
        </Route>
        <Route exact path="/pokedex">
          <Header buttonTitle="Pokedex" buttonFunction={goToHomePage} />
          <PokedexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
