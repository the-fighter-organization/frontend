import React from 'react';
import { connect } from 'react-redux';
import ForbiddenPage from '../../route/ForbiddenPage';
import { confirmarPerfil } from '../../../store/actions/conta';
import SuccessPage from '../../route/SuccessPage';

interface Props {
    match: any;
    dispatch: any;
}

class ContaConfirmacaoPerfil extends React.Component<Props> {
    async componentWillMount() {
        const { match, dispatch } = this.props;
        debugger
        if (!match || !match.params) {
            return;
        }

        const { id, codigoConfirmacao } = match.params;

        if(!id || !codigoConfirmacao){
            return <ForbiddenPage title="Não foi possível confirmar a conta!" detail="Um dos parâmetros de confirmação não foi encontrado, entre em contato com o administrador ou com Igor Bueno."/>
        }

        await dispatch(confirmarPerfil({ id, codigoConfirmacao }))
    }

    render(){
        return <SuccessPage btnTitle="Fazer login" title="Conta confirmada com sucesso!" detail="Você já pode fazer login e aproveitar todas as funcionalidades do Warrior!" redirectRoute={'/login'}/>
    }
}

export default connect()(ContaConfirmacaoPerfil)