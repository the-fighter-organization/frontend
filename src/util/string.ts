export function formatarPlacaVeiculo(placa: string) {
  if (!placa || typeof placa != "string") {
    return null;
  }
  //Cria pattern para o seguinte formato: AAA-1111
  let regex = new RegExp("([a-zA-Z]{3})-([0-9]{4})");

  //Verifica se o valor já não está com a máscara
  if (!regex.test(placa)) {
    return `${placa.substr(0, 3)}-${placa.substr(3, 4)}`;
  }

  return placa;
}

export function formatarCpfPessoa(cpf: string) {
  if (!cpf) {
    return '';
  }
  //Cria pattern para o seguinte formato: 111.111.111-11
  let regex = new RegExp("([0-9]{3}).([0-9]{3}).([0-9]{3})-([0-9]{2})");

  //Verifica se o valor já não está com a máscara
  if (!regex.test(cpf)) {
    return cpf.replace(
      /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/,
      "$1.$2.$3-$4"
    );
  }

  return cpf;
}

export function formatarCnpjPessoa(cnpj: string) {
  //Cria pattern para o seguinte formato: 11.111.111\1111-11
  let regex = new RegExp(
    "([0-9]{2}).([0-9]{3}).([0-9]{3})V([0-9]{4})-([0-9]{2})"
  );

  //Verifica se o valor já não está com a máscara
  if (!regex.test(cnpj)) {
    return cnpj.replace(
      /([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9{2}])/,
      "$1.$2.$3/$4-$5"
    );
  }

  return cnpj;
}

export function formatarCepEndereco(cep: string) {
  //Cria pattern para o seguinte formato: 11111-111
  let regex = new RegExp("([0-9]{5})-([0-9]{3})");

  //Verifica se o valor já não está com a máscara
  if (!regex.test(cep)) {
    return cep.replace(/([0-9]{5})([0-9]{3})/, "$1-$2");
  }

  return cep;
}

export function formatCurrency(num: any) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
