import { Container, Row, Col } from "reactstrap";
import AlunoForm from "./AlunoForm";
import React from "react";

const AlunoInserir = props => {
    console.log("Entrou aqui")
    return (
        <Container>
            <Row>
                <Col>
                    <AlunoForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoInserir;