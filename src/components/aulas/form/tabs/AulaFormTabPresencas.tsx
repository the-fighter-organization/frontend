import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import { IAlunoModel } from '../../../../models/Aluno';
import { buscarAlunos } from '../../../../store/actions/alunos';
import { ApplicationState } from '../../../../store/reducers';
import { AlunoState } from '../../../../store/reducers/alunos';
import { formatarCpfPessoa } from '../../../../util/string';
import { renderInput } from '../../../template/input/InputTemplate';

interface IRenderPresencasProps extends AlunoState {
    fields: any;
    meta: any;
    dispatch: (func: any) => Promise<any>
}

const renderAlunosOptions = (alunos: IAlunoModel[], index: number) => (
    <React.Fragment>
        <option>Selecione...</option>
        {alunos.map(aluno => <option key={`option-${index}-${aluno._id}`} value={aluno._id}>{aluno.nome}</option>)}
    </React.Fragment>
)

const renderPresencas = ({ fields, meta: { error, submitFailed }, alunos }: IRenderPresencasProps) => {
    return (
        <ListGroup>
            {/* <div className="mb-2">
                <Button color="info" onClick={() => fields.push()}>
                    Novo <FontAwesomeIcon icon="plus" />
                </Button>
            </div> */}
            {fields.map((field, index) => (
                <ListGroupItem key={index}>
                    <Row>
                        <Col lg="6" xl="6" md="6" sm="12">
                            <Field
                                name={`${field}.aluno`}
                                type="select"
                                component={renderInput}
                                label={`Aluno ${index + 1}`}
                                placeholder="Selecione o aluno"
                            >
                                {renderAlunosOptions(alunos, index)}
                            </Field>
                        </Col>
                        <Col xl="3" sm="12" className="d-flex align-self-center">
                            <Field
                                name={`${field}.presente`}
                                type="checkbox"
                                label="Presente?"
                                component={renderInput} />
                        </Col>

                        {/* <Col className="d-flex align-self-center" xl="3" sm="12">
                            <Button
                                color="danger"
                                title="Remover aluno"
                                onClick={() => fields.remove(index)}
                            >Remover <FontAwesomeIcon icon="trash" />
                            </Button>
                        </Col> */}
                    </Row>
                </ListGroupItem>
            ))
            }
            {error && <ListGroupItem className="error">{error}</ListGroupItem>}
        </ListGroup >
    )
}

const mapStateToProps = (state: ApplicationState) => state.aluno
const renderAlunosWithRedux = connect(mapStateToProps)(renderPresencas as any);

const TurmaFormTabAlunos = props => {
    props.dispatch(buscarAlunos(null))
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <FieldArray name="presencas" component={renderAlunosWithRedux as any} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(TurmaFormTabAlunos)
