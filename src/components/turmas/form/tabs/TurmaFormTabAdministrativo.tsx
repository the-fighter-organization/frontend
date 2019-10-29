import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import { Field } from 'redux-form';

import history from '../../../../config/history';
import { ITurmaModel } from '../../../../models/Turma';
import { removerTurma } from '../../../../store/actions/turmas';
import DateHandler from '../../../../util/date';
import { TURMAS_HOME_ROUTE } from '../../../route/turma';
import { renderInput } from '../../../template/input/InputTemplate';


interface Props {
    initialValues?: ITurmaModel
    dispatch?: any
}

const TurmaFormTabAdministrativo = (props: Props) => {
    const { initialValues, dispatch } = props;

    async function remover() {
        if (!initialValues) {
            return
        }

        if (!window.confirm(`Tem certeza de que deseja remover ${initialValues.nome}?`)) {
            return
        }

        try {
            await dispatch(removerTurma(initialValues._id))
            history.push(TURMAS_HOME_ROUTE)
        } catch (error) {
            alert(`Erro: ${error}`)
        }
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col xl="6" lg="6" md="6" sm="12">
                    <Field format={DateHandler.dateToShortDateTimeString} disabled component={renderInput} required type="text" name="dataRegistro" label="Criado em" placeholder="Criado em" />
                </Col>

            </Row>
            <Row hidden={!initialValues}>
                <Col xl="6" lg="6" md="6" sm="12">
                    <Button onClick={async () => await remover()} outline type="button" color="danger" size="sm">DELETAR ESTE REGISTRO <FontAwesomeIcon icon="trash" /></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(TurmaFormTabAdministrativo)
