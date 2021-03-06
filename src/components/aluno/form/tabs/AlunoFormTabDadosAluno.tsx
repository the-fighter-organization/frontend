import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Field } from 'redux-form';

import { Sexo, TODAS_NACIONALIDADES, TODOS_PERIODOS_ENSINO } from '../../../../models/Aluno';
import { renderInput, getFieldMask } from '../../../template/input/InputTemplate';
import DateHandler from '../../../../util/date';


const AlunoFormTabDadosAluno = props => {
    function getNacionalidadeOptions() {
        return TODAS_NACIONALIDADES.map(item => <option key={item}>{item}</option>)
    }
    return (
        <Container className="mt-3">
            <Row>
                <Field hidden component={renderInput} type="text" name="_id" label="Id" placeholder="ID DO REGISTRO" />
                <Col xl="6" lg="6" md="6" sm="12">
                    <Field component={renderInput} required type="text" name="nome" label="Nome" placeholder="Ex: José da Silva" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field format={DateHandler.dateToInputDate} component={renderInput} required type="date" name="dataNascimento" label="Data de nascimento" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required name="cpf" placeholder="Ex: 12345678910" type="text" label="CPF" {...getFieldMask("cpf")} />
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required label="RG" name="rg" type="text" placeholder="Ex: 1234567" {...getFieldMask("number", 7)} />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} label="Órgão emissor" name="orgaoEmissor" type="text" placeholder="Ex: SSP" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field format={DateHandler.dateToInputDate} component={renderInput} label="Data de expedição" name="dataExpedicao" type="date" placeholder="Ex: 01/01/2000" />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required label="Sexo" name="sexo" type="select" placeholder="Ex: Feminino">
                        <option>Selecione...</option>
                        <option value={Sexo.MASCULINO}>Masculino</option>
                        <option value={Sexo.FEMININO}>Feminino</option>
                    </Field>
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required label="Nacionalidade" name="nacionalidade" type="select" placeholder="Ex: Brasil">
                        <option>Selecione...</option>
                        {getNacionalidadeOptions()}
                    </Field>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} label="Naturalidade" name="naturalidade" type="select" placeholder="Ex: Brasil">
                        <option>Selecione...</option>
                        {getNacionalidadeOptions()}
                    </Field>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required label="Telefone" name="telefone" type="text" placeholder="Ex: +XX (XX) XXXXX-XXXX" {...getFieldMask("telefone")} />
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} label="E-mail" name="email" type="email" placeholder="Ex: meuemail@gmail.com" />
                </Col>
            </Row>
            <Row>
                <Col xl="6" lg="6" md="6" sm="12">
                    <Field component={renderInput} type="text" name="instituicaoEnsino" label="Instituição de ensino" placeholder="Ex: Escola ..." />
                </Col>
                <Col xl="2" lg="2" md="6" sm="12">
                    <Field component={renderInput} type="select" name="periodo" label="Período" placeholder="Ex: Matutino">
                        <option>Selecione...</option>
                        {TODOS_PERIODOS_ENSINO.map(item => <option key={item.key} value={item.value}>{item.key}</option>)}
                    </Field>
                </Col>
                <Col xl="4" lg="4" md="6" sm="12">
                    <Field component={renderInput} name="ano" placeholder="Ex: 9° ano" type="text" label="Ano" />
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required label="Bolsista" name="bolsista" type="select" placeholder="Ex: Não">
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                    </Field>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12">
                    <Field component={renderInput} required label="Inativo" name="inativo" type="select" placeholder="Ex: Não">
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                    </Field>
                </Col>
            </Row>
        </Container>
    )
}

export default AlunoFormTabDadosAluno
