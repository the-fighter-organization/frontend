import React from 'react'
import { ListGroup, Button, ListGroupItem, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field } from 'redux-form';
import { renderInput, getFieldMask } from '../../../../template/input/InputTemplate';
import { TODAS_FORMAS_PAGAMENTO } from '../../../../../models/Aluno';

export const getFormasPagamento = () => {
    return <React.Fragment>
        <option>Selecione...</option>
        {
            TODAS_FORMAS_PAGAMENTO.map(item => (
                <option value={item}>{item}</option>
            ))
        }
    </React.Fragment>
}


export const renderFormasPagamento = ({ fields, meta: { error } }) => (
    <ListGroup>
        <div className="mb-2">
            <Button color="secondary" onClick={() => fields.push()}>
                Nova forma de pagamento <FontAwesomeIcon icon="plus" />
            </Button>
        </div>
        {fields.map((formaPagamento, index) => (
            <ListGroupItem key={`list-group-item-${index}`}>
                <Row>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${formaPagamento}.descricao`}
                            type="text"
                            component={renderInput}
                            label="Descrição"
                            placeholder="Ex: Pago corretamente"
                        />
                    </Col>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${formaPagamento}.formaPagamento`}
                            type="select"
                            component={renderInput}
                            label="Forma de pagamento"
                        >
                            {getFormasPagamento()}
                        </Field>
                    </Col>
                    <Col lg="3" xl="3" md="6" sm="12">
                        <Field
                            name={`${formaPagamento}.valor`}
                            type="text"
                            component={renderInput}
                            label="Valor"
                            {...getFieldMask("moedaBRL", 2)}
                        />
                    </Col>
                    <Col className="d-flex align-self-center" lg="3" xl="3" md="6" sm="12">
                        <Button
                            color="danger"
                            title="Remover responsável"
                            onClick={() => fields.remove(index)}
                        >Remover <FontAwesomeIcon icon="trash" />
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>
        ))}
        {error && <ListGroupItem className="error">{error}</ListGroupItem>}
    </ListGroup>
)
