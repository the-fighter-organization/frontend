import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { Field, InjectedFormProps, reduxForm, submit } from 'redux-form';

import { debounce } from '../../../config/debounce';
import { renderInput } from '../../template/input/InputTemplate';

const AlunoHomeBuscaFormCommon = ({ handleSubmit, dispatch }: InjectedFormProps<{},{}, string> | any) => {

    const updateBusca = () => {
        debugger
        const debounced = debounce(() => dispatch(submit("homeBusca")), 1000);
        debounced()
    }

    return (
    <form onSubmit={handleSubmit}>
        <Col>
            <Field component={renderInput} onChange={updateBusca} type="search" name="nome" placeholder="Ex: João Silva" />
        </Col>
        <Col>
            <Field component={renderInput} onChange={updateBusca} type="search" name="cpf" placeholder="Ex: XXX.XXX.XXX-XX" />
        </Col>
    </form>
)}

const AlunoHomeBuscaForm = reduxForm({
    form: 'homeBusca'
})(AlunoHomeBuscaFormCommon)

export default connect()(AlunoHomeBuscaForm);