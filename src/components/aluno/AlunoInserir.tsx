import { Container, Row, Col } from "reactstrap";
import AlunoForm from "./form/AlunoForm";
import React from "react";
import { connect } from "react-redux";
import { inserirAluno } from "../../store/actions/alunos";

const AlunoInserir = ({ dispatch }) => {
    async function handleSubmit(e) {
        debugger
        alert(JSON.stringify(e))
        dispatch(inserirAluno(e))
    }
    return (
        <Container>
            <Row>
                <Col>
                    <AlunoForm onSubmit={handleSubmit} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(AlunoInserir);