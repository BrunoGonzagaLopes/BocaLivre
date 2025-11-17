import Categoria from "../entities/categoria";
import {get} from "../services/httpService";

const toEntity = (c) => {
    return new Categoria(c.id, c.nome, c.urlIcone);
}

export async function getAll() {
    let dados = await get("categorias");
    console.log(dados.map(d => toEntity(d)));
    return dados.map(d => toEntity(d));
}