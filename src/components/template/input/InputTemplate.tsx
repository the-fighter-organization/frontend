import React from 'react';
import classNames from 'classnames';
import { FormGroup, Input, FormFeedback, Label } from 'reactstrap';
import { MaskTypes } from './maskTypes';
import { createTextMask, createNumberMask } from "redux-form-input-masks";

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement>{
    label:string,
    name:string,
    input: any,
    required:boolean,
    placeholder: string,
    type: string,
    meta: {
        touched: boolean,
        error: any
    }
}

export function getFieldMask(mask: MaskTypes, places: number = 0): any {
    if (!mask) {
      return null;
    }
  
    switch (mask) {
      case "cep":
        return createTextMask({
          pattern: "99999-999"
        });
      case "uf":
        return createTextMask({
          pattern: "AA"
        });
      case "cpf":
        return createTextMask({
          pattern: "999.999.999-99"
        });
      case "cnpj":
        return createTextMask({
          pattern: "99.999.999.9999-99"
        });
      case "decimal":
        return createNumberMask({
          decimalPlaces: 2
        });
      case "kg":
        return createNumberMask({
          suffix: " Kg",
          decimalPlaces: 2
        });
      case "moedaBRL":
        return createNumberMask({
          suffix: " BRL",
          decimalPlaces: places
        });
      case "moedaUSD":
        return createNumberMask({
          suffix: " USD",
          decimalPlaces: places
        });
      case "percentual":
        return createNumberMask({
          suffix: " %",
          decimalPlaces: places
        });
      case "placa":
        return createTextMask({
          pattern: "AAA-9999"
        });
      case "renavam":
        return createTextMask({
          pattern: "9".repeat(11)
        });
      case "antt":
        return createTextMask({
          pattern: "9".repeat(14)
        });
      case "ncm":
        return createTextMask({
          pattern: "9999.99.99"
        });
      case "telefone":
        return createTextMask({
          pattern: "(99) 9 9999-9999"
        });
      case "notaFiscal":
        return createTextMask({
          pattern: "9".repeat(44)
        });
      case "number":
        return createTextMask({
          pattern: "9".repeat(places)
        });
      default:
        return null;
    }
  }

export class renderInput extends React.PureComponent<Props> {
    render() {
        const {
            label,
            input,
            placeholder,
            required,
            type,
            hidden,
            meta: {
                error,
                touched
            },
            name,
            ...rest
        } = this.props;

        const classes = classNames({
            'is-valid': !error && touched,
            'is-invalid': error && touched,
        });

        return (
            <FormGroup>
                <Label className={classNames({'d-none' : hidden})} for={input.name}>{label} {required && <strong className="text-danger">*</strong>}</Label>
                <Input {...rest} {...input} type={type} placeholder={placeholder} className={classes} id={input.name} name={input.name} required={required} hidden={hidden}/>
                {error && touched && !hidden && <FormFeedback valid={false}>{error}</FormFeedback>}
            </FormGroup>
        );
    }
}