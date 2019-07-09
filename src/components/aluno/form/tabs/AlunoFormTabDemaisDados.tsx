import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Field } from 'redux-form';

import { renderInput, getFieldMask } from '../../../template/input/InputTemplate';


const AlunoFormTabDemaisDados = props => {
    return (
        <Container className="mt-3">
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} type="text" name="numeroZempo" label="N° Zempo" placeholder="Ex: 12345" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} type="text" name="numeroFiliacao" label="N° filiação" placeholder="Ex: 12345" />
                </Col>
                <Col xl="6" lg="6" md="6" sm="12">
                    <Field component={renderInput} name="graduacaoAtual" type="text" label="Graduação atual" placeholder="Ex: Mestre supremo" />
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} name="pesoAtual" type="text" label="Peso atual" placeholder="Ex: 80,00" {...getFieldMask("decimal", 2)}/>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} type="text" name="alturaAtual" label="Altura atual" placeholder="Ex: 1,80" {...getFieldMask("decimal", 2)} />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} type="date" name="dataUltimaGraduacao" label="Última graduação" placeholder="Ex: 01/01/2010" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} name="categoria" type="text" label="Categoria" placeholder="Ex: Peso médio" />
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} type="text" name="dataFiliacao" label="Data de filiação" placeholder="Ex: 01/01/2010" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} type="text" name="situacaoFejur" label="Situação FEJUR" placeholder="Ex: 01/01/2010" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} name="situacaoFbj" type="text" label="Situação FBJ" placeholder="Ex: Regular" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} name="tipoSanguineo" type="text" label="Tipo sanguíneo" placeholder="Ex: A+" />
                </Col>
            </Row>
            <Row>
                <Col xl="12" lg="12" md="12" sm="12">
                    <Field component={renderInput} name="observacoesMedicas" type="textarea" label="Observações médicas" placeholder="Ex: O Aluno está com exames conformes" />
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoFormTabDemaisDados
