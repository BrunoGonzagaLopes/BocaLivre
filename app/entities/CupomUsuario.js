export default class CupomUsuario {
  constructor(id, cupom, codigo, qrCodeUrl, utilizado, dataAquisicao, dataExpiracao) {
    this.id = id;
    this.cupom = cupom;
    this.codigo = codigo;
    this.qrCodeUrl = qrCodeUrl;
    this.utilizado = utilizado;
    this.dataAquisicao = dataAquisicao;
    this.dataExpiracao = dataExpiracao;
  };
};