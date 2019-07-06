import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Field } from 'redux-form';

import { renderInput } from '../../template/input/InputTemplate';
import { TODOS_PEDIODOS_ENSINO } from '../../../models/Aluno';


const AlunoFormTabEscolaridade = props => {
    return (
        <Container className="mt-3">
            <Row>
                <Col xl="6" lg="6" md="6" sm="12">
                    <Field component={renderInput} required type="text" name="instituicaoEnsino" label="Instituição de ensino" placeholder="Ex: Escola ..." />
                </Col>
                <Col xl="2" lg="2" md="6" sm="12">
                    <Field component={renderInput} type="select" name="periodo" label="Período" placeholder="Ex: Matutino">
                        {TODOS_PEDIODOS_ENSINO.map(item => <option key={item.key} value={item.value}>{item.key}</option>)}
                    </Field>
                </Col>
                <Col xl="4" lg="4" md="6" sm="12">
                    <Field component={renderInput} name="ano" placeholder="Ex: 9° ano" type="text" label="Ano" />
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoFormTabEscolaridade
