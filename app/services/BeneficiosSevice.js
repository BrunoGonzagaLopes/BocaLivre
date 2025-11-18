import Cupom from "../entities/Cupom";
import {get} from "../services/httpService";

const toEntity = (c) => {
    return new Cupom(c.id, c.nome, c.desconto, c.dataLimite, c.valor);
}

export async function getAllCupons() {
    let dados = await get("cupom");
    console.log(dados.map(d => toEntity(d)));
    return dados.map(d => toEntity(d));
}

export async function getAllCuponsByUsuario() {
    let dados = await get("usuarios/beneficios");
    return dados.cupons.map(c => toEntity(c));
}

export async function getPontuacao() {
    let dados = await get("usuarios/beneficios");
    return dados.pontuacao;
}
