import { Container, Row, Col } from "reactstrap";
import React from 'react'

interface Props {
  message?: string;
}

const NotFoundPage: React.SFC<Props> = props => (
  <Container>
    <Row>
      <Col>
        <i className="fas fa-3x fa-times-circle" />
        <h2>
          {props.message ? props.message : "Essa página não foi encontrada!"}
        </h2>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
