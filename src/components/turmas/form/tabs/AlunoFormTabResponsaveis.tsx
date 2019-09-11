import React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import { TODOS_NIVEIS_PARENTESCOS } from '../../../../models/Aluno';
import { renderInput, getFieldMask } from '../../../template/input/InputTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const renderResponsaveis = ({ fields, meta: { error, submitFailed } }) => (
    <ListGroup>
        <div className="mb-2">
            <Button color="info" onClick={() => fields.push()}>
                Novo <FontAwesomeIcon icon="plus"/>
            </Button>
        </div>
        {fields.map((responsavel, index) => (
            <ListGroupItem key={index}>
                <Row>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${responsavel}.nome`}
                            type="text"
                            component={renderInput}
                            label="Nome"
                            placeholder="Ex: João Silva"
                        />
                    </Col>

                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${responsavel}.cpf`}
                            type="text"
                            component={renderInput}
                            label="CPF (Sem dígitos)"
                            placeholder="Ex: 12345678910"
                            {...getFieldMask("cpf")}
                        />
                    </Col>

                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${responsavel}.rg`}
                            type="text"
                            component={renderInput}
                            label="RG"
                            placeholder="Ex: 1234567"
                            {...getFieldMask("number", 7)}
                        />
                    </Col>

                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${responsavel}.telefone`}
                            type="text"
                            component={renderInput}
                            label="Telefone"
                            placeholder="Ex: +XX (XX) XXXXX-XXXX"
                        />
                    </Col>

                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${responsavel}.nivelParentesco`}
                            type="select"
                            component={renderInput}
                            label="Parentesco"
                            placeholder="Ex: Mãe"
                        >
                            <option>Selecione...</option>
                            {TODOS_NIVEIS_PARENTESCOS.map(item => <option key={item.key} value={item.value}>{item.key}</option>)}
                        </Field>
                    </Col>

                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${responsavel}.observacao`}
                            type="text"
                            component={renderInput}
                            label="Observação"
                            placeholder="Ex: Bom aluno."
                        />
                    </Col>

                    <Col className="d-flex align-self-center" lg="3" xl="3" md="6" sm="12">
                        <Button
                            color="danger"
                            title="Remover responsável"
                            onClick={() => fields.remove(index)}
                        >Remover <FontAwesomeIcon icon="trash"/>
                    </Button>
                    </Col>
                </Row>
            </ListGroupItem>
        ))}
        {error && <ListGroupItem className="error">{error}</ListGroupItem>}
    </ListGroup>
)

const AlunoFormTabResponsaveis = props => {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <FieldArray name="responsaveis" component={renderResponsaveis as any} />
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoFormTabResponsaveis
