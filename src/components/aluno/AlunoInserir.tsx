import { Container, Row, Col } from "reactstrap";
import AlunoForm from "./form/AlunoForm";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { salvarAluno } from "../../store/actions/alunos";
import { IAlunoModel } from "../../models/Aluno";
import { navbarTitleChange } from "../../store/actions/window";

const AlunoInserir = ({ dispatch }) => {
    useEffect(() => {
        dispatch(navbarTitleChange("Novo aluno"))
    })
    async function handleSubmit(e) {
        try {
            await dispatch(salvarAluno(e))
        } catch (error) {
            alert('Ocorreu um erro ao salvar o aluno! ' + error.message)
        }
    }

    const initialValues = { inativo: false, nacionalidade: 'Brasil', naturalidade: 'Brasil' } as IAlunoModel

    return (
        <Container>
            <Row>
                <Col>
                    <AlunoForm onSubmit={handleSubmit} initialValues={initialValues} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(AlunoInserir);