import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import DateHandler from '../../../../util/date';
import { renderInput } from '../../../template/input/InputTemplate';

const renderAulas = ({ fields, meta: { error, submitFailed } }) => (
    <ListGroup>
        <div className="mb-2">
            <Button color="info" onClick={() => fields.push()}>
                Novo <FontAwesomeIcon icon="plus" />
            </Button>
        </div>
        {fields.map((responsavel, index) => (
            <ListGroupItem key={index}>
                <Row>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            disabled
                            name={`${responsavel}.dataRegistro`}
                            format={DateHandler.dateToInputDate}
                            type="text"
                            component={renderInput}
                            label="Data de registro"
                            placeholder="Ex: 01/01/2021"
                        />
                    </Col>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            disabled
                            name={`${responsavel}.dataAula`}
                            format={DateHandler.dateToInputDate}
                            type="text"
                            component={renderInput}
                            label="Data da aula"
                            placeholder="Ex: 01/01/2021"
                        />
                    </Col>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            disabled
                            name={`${responsavel}.dataChamada`}
                            format={DateHandler.dateToInputDate}
                            type="text"
                            component={renderInput}
                            label="Data da chamada"
                            placeholder="Ex: 01/01/2021"
                        />
                    </Col>
                    <Col className="d-flex align-self-center" lg="3" xl="3" md="6" sm="12">
                        <Button
                            color="danger"
                            title="Remover responsável"
                            onClick={() => fields.remove(index)}
                        >Remover <FontAwesomeIcon icon="trash" />
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>
        ))}
        {error && <ListGroupItem className="error">{error}</ListGroupItem>}
    </ListGroup>
)

const TurmaFormTabAulas = props => {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <FieldArray name="aulas" component={renderAulas as any} />
                </Col>
            </Row>
        </Container>
    )
}

export default TurmaFormTabAulas
