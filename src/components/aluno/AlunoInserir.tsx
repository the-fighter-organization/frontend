import { Container, Row, Col } from "reactstrap";
import AlunoForm from "./form/AlunoForm";
import React from "react";

const AlunoInserir = props => {
    async function handleSubmit(e){
        debugger
        alert(JSON.stringify(e))
    }
    return (
        <Container>
            <Row>
                <Col>
                    <AlunoForm onSubmit={handleSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoInserir;