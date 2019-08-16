import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FieldArray } from 'redux-form';

import AlunoFieldMensalidade from './AlunoFieldMensalidade';


const AlunoFormTabMensalidades = props => {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <FieldArray name="mensalidades" component={AlunoFieldMensalidade as any} />
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoFormTabMensalidades;
