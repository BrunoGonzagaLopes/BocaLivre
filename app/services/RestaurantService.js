import RestaurantEntity from "../entities/restaurants";
import {get} from "../services/httpService";
import {getCurrentAddress} from "../services/locationService";


const toEntity = (d) => {
  return new RestaurantEntity(
    d.id, d.nome, d.mediaAvaliacao, d.endereco, d.descricao,
    d.imageUrl, d.distancia/1000
  );
};

export async function getAllHTTP() {
  let localizacaoaAtual = await getCurrentAddress();
  let enderecoFormatado = "";
  if (localizacaoaAtual != null) {
    enderecoFormatado = `${localizacaoaAtual.street}, ${localizacaoaAtual.streetNumber}. ${localizacaoaAtual.postalCode}, ${localizacaoaAtual.district}`
  }
  let restaurantes = await get(`estabelecimentos?endereco=${enderecoFormatado}`)
  return restaurantes.map(e => toEntity(e));
}