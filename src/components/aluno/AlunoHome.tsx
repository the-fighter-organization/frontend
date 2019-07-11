import Col from "reactstrap/lib/Col";
import { Container, Row } from "reactstrap";
import React from "react";
import AlunoHomeBuscaForm from "./busca/AlunoHomeBuscaForm";
import { IAlunoModel } from "../../models/Aluno";
import { connect } from "react-redux";
import { buscarAlunos } from "../../store/actions/alunos";


const AlunoHome = ({ dispatch }) => {
    const handleSubmit = async (data: IAlunoModel) => {
        debugger
        console.log(data)
        try {
            let response = await dispatch(buscarAlunos(data))
        } catch (error) {
            alert("Erro")
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <AlunoHomeBuscaForm onSubmit={handleSubmit as any} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(AlunoHome);