import React from 'react';
import classNames from 'classnames';
import { FormGroup, Input, FormFeedback, Label } from 'reactstrap';

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement>{
    label:string,
    name:string,
    input: any,
    placeholder: string,
    type: string,
    meta: {
        touched: boolean,
        error: any
    }
}

export class renderInput extends React.PureComponent<Props> {
    render() {
        const {
            label,
            input,
            placeholder,
            type,
            meta: {
                touched,
                error,
            },
            name,
            ...rest
        } = this.props;

        const classes = classNames({
            success: touched && !error,
            danger: touched && error,
        });

        return (
            <FormGroup color={classes}>
                <Label for={name}>{label}</Label>
                <Input {...rest} {...input} type={type} placeholder={placeholder} state={classes} id={name} name={name} />
                {touched && error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        );
    }
}