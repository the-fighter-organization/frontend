import React from 'react'
import { Button } from 'reactstrap';
import history from '../../config/router'

interface Props {
  title?: string;
  detail?: string;
}

const ForbiddenPage: React.SFC<Props> = props => {
  let title = props.title
    ? props.title
    : "Você não tem permissão para acessar essa página.";
  let detail = props.detail
    ? props.detail
    : "Para mais informações, contate seu administrador.";

  return (
    <div className="my-5">
      <div className="d-flex justify-content-center align-items-center">
        <i className="fas text-warning fa-exclamation-triangle fa-10x" />
      </div>
      <div className="mt-3">
        <h1 className="text-center">{title}</h1>
        <h3 className="text-center mt-3">{detail}</h3>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <Button size="md" color="success" onClick={e => history.goBack()}>
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default ForbiddenPage;
