export function validarNome(nome) {
  if (!nome || nome.trim().length < 8) {
    return {
      valido: false,
      mensagem: "Informe seu nome Completo"
    };
  }

  return { valido: true };
}

export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^([0-9])\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto >= 10) resto = 0;

  return resto === parseInt(cpf.charAt(10));
}

export function validarSenha(senha, confirmar) {
  const minLength = 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temEspecial = /[^A-Za-z0-9]/.test(senha);


  if (senha !== confirmar) {
    return {
      valido: false,
      mensagem: "As senhas não coincidem."
    };
  }

 
  if (
    senha.length < minLength ||
    !temMaiuscula ||
    !temMinuscula ||
    !temEspecial
  ) {
    return {
      valido: false,
      mensagem:
        "A senha não atende aos critérios:\n" +
        "- Mínimo de 8 caracteres\n" +
        "- Pelo menos 1 letra maiúscula\n" +
        "- Pelo menos 1 letra minúscula\n" +
        "- Pelo menos 1 caractere especial"
    };
  }

  return { valido: true };
}