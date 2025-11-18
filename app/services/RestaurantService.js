import RestaurantEntity from "../entities/restaurants";
import {get, post, deletar} from "../services/httpService";
import {getCurrentAddress} from "../services/locationService";

const toEntity = (d) => {
  return new RestaurantEntity(
    d.id, d.nome, d.mediaAvaliacao, d.endereco, d.descricao,
    d.imageUrl, d.distancia/1000
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

export async function getFavoritos() {
  let restaurantes = await get(`usuarios/favoritos`)
  return restaurantes.map(e => toEntity(e));
}

export async function deleteFavorito(favoritoId) {
  let restaurantes = await deletar(`usuarios/favoritos/${favoritoId}`);
  return restaurantes.map(e => toEntity(e));
}

export async function favoritar(favoritoId) {
  let restaurantes = await post(`usuarios/favoritos/${favoritoId}`);
  return restaurantes.map(e => toEntity(e));
}