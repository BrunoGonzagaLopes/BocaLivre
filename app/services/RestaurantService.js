import RestaurantEntity from "../entities/restaurants";
import {get, post, deletar} from "../services/httpService";
import {getCurrentAddress} from "../services/locationService";
import CardapioEntity from "../entities/Cardapio";

const toEntity = (d) => {
  return new RestaurantEntity(
    d.id, d.nome, d.mediaAvaliacao, d.endereco, d.descricao,
    d.imageUrl, d.distancia/1000, d.urlMaps
  );
};

const toCardapioEntity = (d) => {
  return new CardapioEntity(
      d.id, d.nome, d.descricao, d.preco, d.urlImage, d.quantidadePessoasServidas
  );
};

export async function getAllHTTP(dados) {
  let localizacaoaAtual = await getCurrentAddress();
  let enderecoFormatado = "";

  if (localizacaoaAtual != null) {
    enderecoFormatado = `${localizacaoaAtual.street}, ${localizacaoaAtual.streetNumber}. ${localizacaoaAtual.postalCode}, ${localizacaoaAtual.district}`
  }

  if (dados.nome === undefined) {
    dados.nome = "";
  }

  if (dados.categoria === undefined) {
    dados.categoria = "";
  }

  if (dados.distancia === undefined) {
    dados.distancia = "";
  }

  let restaurantes = await get(`estabelecimentos?nome=${dados.nome}&endereco=${enderecoFormatado}&categoria=${dados.categoria}&distancia=${dados.distancia}`)
  return restaurantes.map(e => toEntity(e));
}

export async function getCardapio(id) {
  let cardapio = await get(`estabelecimentos/${id}/cardapio`);
  return cardapio.map(e => toCardapioEntity(e));
}

export async function getById(id) {
  let restaurantes = await get(`estabelecimentos/${id}`)
  return toEntity(restaurantes);
}

export async function getFavoritos() {
  let restaurantes = await get(`usuarios/favoritos`)
  return restaurantes.map(e => toEntity(e));
}

export async function deleteFavorito(restauranteId) {
  let restaurantes = await deletar(`usuarios/favoritos/${restauranteId}`);
  return restaurantes.map(e => toEntity(e));
}

export async function favoritar(restauranteId) {
  let restaurantes = await post(`usuarios/favoritos/${restauranteId}`);
  return restaurantes.map(e => toEntity(e));
}

export async function avaliar(body) {
  let restaurantes = await post(`estabelecimentos/avaliacoes`, body);
  return restaurantes.map(e => toEntity(e));
}