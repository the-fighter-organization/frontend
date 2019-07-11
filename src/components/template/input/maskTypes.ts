type NumberMasks =
  | "decimal"
  | "moedaBRL"
  | "moedaUSD"
  | "kg"
  | "number"
  | "percentual";

type DocumentMasks =
  | "telefone"
  | "celular"
  | "cnpj"
  | "cpf"
  | "placa"
  | "renavam"
  | "antt"
  | "ncm"
  | "notaFiscal"
  | "cep";

type AdressMasks = "uf" | "cep";

export type MaskTypes = NumberMasks | DocumentMasks | AdressMasks;

export interface IInputMaskProps {
  mask?: MaskTypes;
}
