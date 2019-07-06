import { Container, Row, Col } from "reactstrap";
import AlunoForm from "./AlunoForm";
import React from "react";

const AlunoInserir = props => {
    async function showValues(e){
        alert(JSON.stringify(e))
    }
    return (
        <Container>
            <Row>
                <Col>
                    <AlunoForm onSubmit={showValues}/>
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoInserir;