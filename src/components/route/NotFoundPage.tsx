import { Container, Row, Col } from "reactstrap";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  message?: string;
}

const NotFoundPage: React.SFC<Props> = props => (
  <Container>
    <Row>
      <Col>
      <FontAwesomeIcon icon="times-circle" size="3x"/>
        <h2>
          {props.message ? props.message : "Essa página não foi encontrada!"}
        </h2>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
