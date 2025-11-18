import Cupom from "../entities/Cupom";
import {get} from "../services/httpService";
import CupomUsuario from "../entities/CupomUsuario";

const toCupom = (c) => {
    return new Cupom(c.id, c.nome, c.desconto, c.dataLimite, c.valor);
}

const toCupomUsuario = (c) => {
    return new CupomUsuario(c.id, c.cupom, c.codigo, c.qrCodeUrl, c.utilizado, c.dataAquisicao, c.dataExpiracao);
}

export async function getAllCupons() {
    let dados = await get("cupom");
    console.log(dados.map(d => toCupom(d)));
    return dados.map(d => toCupom(d));
}

export async function getAllCuponsByUsuario() {
    let dados = await get("usuarios/beneficios");
    return dados.cupons.map(d => toCupomUsuario(d));
}

export async function getPontuacao() {
    let dados = await get("usuarios/beneficios");
    return dados.pontuacao;
}