import React from "react";
import {DivFooter, ImgPokemon, DivImg, DivText, Title, Copyright, Link} from "./styled"

export const Footer = () => {
    return (
        <DivFooter>
          <DivImg>
          <ImgPokemon src="https://www.flaticon.com/svg/static/icons/svg/188/188987.svg"/>
          <ImgPokemon src="https://www.flaticon.com/svg/static/icons/svg/188/188989.svg"/>
          <ImgPokemon src="https://www.flaticon.com/svg/static/icons/svg/188/188988.svg"/>
          <ImgPokemon src="https://www.flaticon.com/svg/static/icons/svg/188/188990.svg"/>
          <ImgPokemon src="https://www.flaticon.com/svg/static/icons/svg/188/188997.svg"/>
          </DivImg>
  
          <DivText>
            <section>
              <Title>Desenvolvedores:</Title>
                <p>
                <Link href="https://github.com/DiaMont30" target="_blank">Diana Monteiro</Link> <br /> <Link href="https://github.com/nizolnier" target="_blank">Leandro Momose</Link>
                </p>
            </section>
            <section>
            <Title>Api Fonte:</Title>
                <p>
                <Link href="https://pokeapi.co" target="_blank">https://pokeapi.co/</Link>
                </p>
            </section>
          </DivText>
          <Copyright>Copyright © 2020</Copyright>
        </DivFooter>
      );
}