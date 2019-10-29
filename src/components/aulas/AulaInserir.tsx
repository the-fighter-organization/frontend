import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { salvarAula } from '../../store/actions/aulas';
import { navbarTitleChange } from '../../store/actions/window';
import AulaForm from './form/AulaForm';
import { IAulaModel } from '../../models/Turma';

const AulaInserir = ({ dispatch }) => {
    useEffect(() => {
        dispatch(navbarTitleChange("Nova aula"))
    })
    async function handleSubmit(e) {
        try {
            await dispatch(salvarAula(e))
        } catch (error) {
            alert('Ocorreu um erro ao salvar o aula! ' + error.message)
        }
    }

    const initialValues = { dataAula: new Date() } as IAulaModel

    return (
        <Container>
            <Row>
                <Col>
                    <AulaForm onSubmit={handleSubmit} initialValues={initialValues} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(AulaInserir);