import React from 'react'
import { Button } from 'reactstrap';
import history from '../../config/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  title: string;
  detail: string;
  redirectRoute: string;
  btnTitle: string;
}

const SuccessPage: React.SFC<Props> = ({ title, detail, redirectRoute, btnTitle }) => {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon="check-circle" className="text-success" size="10x" />
      </div>
      <div className="mt-3">
        <h1 className="text-center">{title}</h1>
        <h3 className="text-center mt-3">{detail}</h3>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <Button size="md" color="success" onClick={() => history.push(redirectRoute)}>
          {btnTitle}
        </Button>
    </div>
    </div >
  );
};

export default SuccessPage;
