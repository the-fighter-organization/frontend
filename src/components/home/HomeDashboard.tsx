import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { navbarTitleChange } from '../../store/actions/window';

const HomeDashboard = ({ dispatch }) => {
    useEffect(() => {
        dispatch(navbarTitleChange("Dashboard"))
    })

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(HomeDashboard)