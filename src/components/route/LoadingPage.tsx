import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LoadingPage: React.SFC = () => {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon="cog" size="5x" className="fa-pulse" />
      </div>
      <div className="mt-3">
        <h1 className="text-center">Carregando...</h1>
      </div>
    </div >
  );
};

export default LoadingPage;
