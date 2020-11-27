import React from "react";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import { baseUrl } from "../../Constant/url";
import {
  PokeDetails,
  PokeImg,
  DivPokeImg,
  DivPowers,
  DivMoves,
  DivMoveName,
  DivTypes,
  DivTypeAndMoves,
  Title,
} from "./styled";
import HeaderDetails from "../../Components/Header/HeaderDetails";

const PokeDetailPage = () => {
  const params = useParams();

  //Requisição dos dados de detalhes dos pokémons
  const getDetails = useRequestData(`${baseUrl}/${params.pokeName}`, undefined);

  //Objeto criado para passar como parâmetro o pokemon específico para função de remover e adicionar
  const newPokemon = {
    name: params.pokeName,
    url: `${baseUrl}/${params.pokeName}`,
  };

  return (
    <div>
      <HeaderDetails pokeName={params.pokeName} pokemon={newPokemon} />

      {/* Renderiza a tela de detalhes do pokémon se getDetail for true (não estiver vazio) */}
      {getDetails && (
        <PokeDetails>
          <DivPokeImg>
            <PokeImg src={getDetails.sprites.front_default} />
            <PokeImg src={getDetails.sprites.back_default} />
          </DivPokeImg>
          <DivPowers>
            <Title>Poderes</Title>
            {/* Map para pegar as estatísticas de poderes do pokémon */}
            {getDetails.stats.map((stat) => {
              return (
                <p>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              );
            })}
          </DivPowers>
          <DivTypeAndMoves>
            <DivTypes>
              <Title>Tipo</Title>
              {/* Map para pegar detalhe de tipo do pokémon */}
              {getDetails.types.map((type) => {
                return <p>{type.type.name}</p>;
              })}
            </DivTypes>
            <DivMoves>
              <Title>Movimentos</Title>
              <DivMoveName>
                {/* Map para pegar os movimentos do pokémon */}
                {getDetails.moves.map((move, index) => {
                  return index < 5 && <p>{move.move.name}</p>;
                })}
              </DivMoveName>
            </DivMoves>
          </DivTypeAndMoves>
        </PokeDetails>
      )}
    </div>
  );
};

export default PokeDetailPage;
