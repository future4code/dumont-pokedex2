import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "../Screens/HomePage"
import Header from "../Components/Header"
import PokeDetailPage from "../Screens/PokeDetailPage"
import PokedexPage from "../Screens/PokedexPage"
import Header from "../Components/Header"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    {/*HomePage*/}
                </Route>
                <Route exact path="/pokedetail/:pokeName">
                    <PokeDetailPage/>
                </Route>
                <Route exact path="/pokedex"> 
                    <PokedexPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router