import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Field, InjectedFormProps, reduxForm, submit } from 'redux-form';

import { debounce } from '../../../config/debounce';
import { renderInput } from '../../template/input/InputTemplate';

const TurmaHomeBuscaFormCommon = ({ handleSubmit, dispatch }: InjectedFormProps<{}, {}, string> | any) => {

    const updateBusca = debounce(() => dispatch(submit("homeBusca")), 1000);

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col md="6" sm="12">
                    <Field component={renderInput} onChange={updateBusca} label="Nome" type="search" name="nome" placeholder="Ex: João Silva" />
                </Col>
                <Col md="6" sm="12">
                    <Field component={renderInput} onChange={updateBusca} label="CPF" type="search" name="cpf" placeholder="Ex: XXX.XXX.XXX-XX" />
                </Col>
            </Row>
        </form>
    )
}

const TurmaHomeBuscaForm = reduxForm({
    form: 'homeBusca'
})(TurmaHomeBuscaFormCommon)

export default connect()(TurmaHomeBuscaForm);