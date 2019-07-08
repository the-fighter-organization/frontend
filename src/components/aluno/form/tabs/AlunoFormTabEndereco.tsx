import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Field } from 'redux-form';

import { renderInput } from '../../../template/input/InputTemplate';


const AlunoFormTabEndereco = props => {
    return (
        <Container className="mt-3">
            <Row>
                <Col xl="6" lg="6" md="6" sm="12">
                    <Field component={renderInput} required type="text" name="logradouro" label="Logradouro" placeholder="Ex: Avenida Brasil" />
                </Col>
                <Col xl="2" lg="2" md="6" sm="12">
                    <Field component={renderInput} type="text" name="numero" label="Número" placeholder="123a"/>
                </Col>
                <Col xl="4" lg="4" md="6" sm="12">
                    <Field component={renderInput} name="bairro" placeholder="Ex: Nova Alvorada" type="text" label="Bairro" />
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} label="Cidade" name="cidade" type="text" placeholder="Ex: São Paulo" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} label="CEP" name="cep" type="text" placeholder="Ex: 123456-000" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} label="UF" name="uf" type="text" maxLength={2} placeholder="Ex: SP" />
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoFormTabEndereco
