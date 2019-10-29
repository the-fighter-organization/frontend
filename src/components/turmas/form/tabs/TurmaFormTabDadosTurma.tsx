import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import { renderInput } from '../../../template/input/InputTemplate';

const renderColaboradoresField: React.SFC<any> = ({ fields, meta: { error } }) => (
    <React.Fragment>
        <div className="mb-2">
            <Button color="info" onClick={() => fields.push()}>
                Colaborador <FontAwesomeIcon icon="plus" />
            </Button>
        </div>
        <ListGroup>
            {(fields || []).map((field, index) => <ListGroupItem key={`colaborador-field-${index}`}>
                <Row>
                    <Col xl="10">
                        <Field component={renderInput} name={field} type="text" label={`Colaborador ${index + 1}`} />
                    </Col>
                    <Col xl="2" className="d-flex align-self-center">
                        <Button color="danger" onClick={() => fields.remove(index)}><FontAwesomeIcon icon="trash" /></Button>
                    </Col>
                </Row>
            </ListGroupItem>)}
            {error && <ListGroupItem className="error">{error}</ListGroupItem>}
        </ListGroup>
    </React.Fragment>
)

const TurmaFormTabDadosTurma = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Field hidden component={renderInput} type="text" name="_id" label="Id" placeholder="ID DO REGISTRO" />
                <Col xl="6" sm="12">
                    <Row>
                        <Col xl="6" sm="12">
                            <Field component={renderInput} required type="text" name="nome" label="Nome da turma" placeholder="Ex: Judô 1" />
                        </Col>
                        <Col xl="6" sm="12">
                            <Field component={renderInput} required type="text" name="arteMarcial" label="Arte marcial" placeholder="Ex: judô" />
                        </Col>
                        <Col xl="6" sm="12">
                            <Field component={renderInput} required type="text" name="localTreino" label="Local de treino" />
                        </Col>
                    </Row>
                </Col>
                <Col xl="6" sm="12">
                    <FieldArray component={renderColaboradoresField} required name="colaboradores" type="text" label="Colaboradores" />
                </Col>
            </Row>
        </Container>
    )
}

export default TurmaFormTabDadosTurma
