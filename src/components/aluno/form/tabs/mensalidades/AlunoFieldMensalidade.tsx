import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, UncontrolledCollapse } from 'reactstrap';
import { Field, FieldArray, formValueSelector } from 'redux-form';

import { IAlunoMensalidade, TODAS_SITUACOES_MENSALIDADES } from '../../../../../models/Aluno';
import { ApplicationState } from '../../../../../store/reducers';
import DateHandler from '../../../../../util/date';
import { renderInput } from '../../../../template/input/InputTemplate';
import { renderFormasPagamento } from './AlunoFieldFormasPagamento';

const getSituacoesMensalidades = () => {
    return <React.Fragment>
        <option>Selecione...</option>
        {
            TODAS_SITUACOES_MENSALIDADES.map(item => (
                <option value={item}>{item}</option>
            ))
        }
    </React.Fragment>
}

interface Props {
    fields: any;
    meta: any;
    responsaveis: IAlunoMensalidade[]
}

const renderMensalidades: React.SFC<Props> = ({ fields, meta: { error }, responsaveis }) => (
    <React.Fragment>
        <div className="mb-2">
            <Button color="info" onClick={() => fields.push()}>
                Nova mensalidade <FontAwesomeIcon icon="plus" />
            </Button>
        </div>
        {(fields as any[]).map((mensalidade, index) => (
            <Card key={`card-mensalidade-${index}`}>
                <CardHeader>
                    <Button id={`btn-header-dropdown-${index}`} type="button" color="none" className="btn-link">
                        {(!responsaveis[index] || !responsaveis[index].data)
                            ? 'Novo registro'
                            : DateHandler.format(responsaveis[index].data, 'YYYY - MMMM')}
                    </Button>
                </CardHeader>
                <UncontrolledCollapse toggler={`btn-header-dropdown-${index}`} >
                    <CardBody>
                        <Row>
                            <Col lg="3" xl="3" md="6" sm="12">
                                <Field
                                    name={`${mensalidade}.data`}
                                    type="date"
                                    component={renderInput}
                                    label="Data"
                                />
                            </Col>
                            <Col lg="3" xl="3" md="6" sm="12">
                                <Field
                                    name={`${mensalidade}.situacao`}
                                    type="select"
                                    component={renderInput}
                                    label="Situação"
                                >
                                    {getSituacoesMensalidades()}
                                </Field>
                            </Col>
                            <Col lg="3" xl="3" md="6" sm="12">
                                <Field
                                    name={`${mensalidade}.observacoes`}
                                    type="text"
                                    component={renderInput}
                                    label="Observações"
                                    placeholder="Ex: Tudo certo"
                                />
                            </Col>
                            <Col xl="12">
                                <ListGroup>
                                    <FieldArray name={`${mensalidade}.formasPagamento`} component={renderFormasPagamento as any} />
                                </ListGroup>
                            </Col>
                            <Col className="d-flex align-self-center" lg="3" xl="3" md="6" sm="12">
                                <Button
                                    color="danger"
                                    title="Remover mensalidade"
                                    onClick={() => fields.remove(index)}
                                >Remover <FontAwesomeIcon icon="trash" />
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </UncontrolledCollapse>
            </Card>
        ))}
        {error && <ListGroupItem className="error">{error}</ListGroupItem>}
    </React.Fragment>
)

const selector = formValueSelector("aluno");

const mapStateToProps = (state: ApplicationState) => {
    return {
        responsaveis: selector(state, "mensalidades")
    }
}

export default connect(mapStateToProps)(renderMensalidades)