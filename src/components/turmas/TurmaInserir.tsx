import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { salvarTurma } from '../../store/actions/turmas';
import { navbarTitleChange } from '../../store/actions/window';
import TurmaForm from './form/TurmaForm';
import { ITurmaModel } from '../../models/Turma';

const TurmaInserir = ({ dispatch }) => {
    useEffect(() => {
        dispatch(navbarTitleChange("Novo turma"))
    })
    async function handleSubmit(e) {
        try {
            await dispatch(salvarTurma(e))
        } catch (error) {
            alert('Ocorreu um erro ao salvar o turma! ' + error.message)
        }
    }

    const initialValues = { inativo: false, aulas: [], colaboradores: [] } as ITurmaModel

    return (
        <Container>
            <Row>
                <Col>
                    <TurmaForm onSubmit={handleSubmit} initialValues={initialValues} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(TurmaInserir);