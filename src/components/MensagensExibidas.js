import React from 'react'
import Mensagem from './Mensagem';

class MensagensExibidas extends React.Component {
    state = {
        mensagensNaTela: this.mensagensNaTelagem = [],
        mensagem: this.mensagem = {
            usuario: '',
            conteudo: ''
        }
    }

    aak = () => {
        console.log('dkskds')
    }

    render () {
        
        let aaa = <Mensagem enviarMensagem={this.aak}/>
        
        
        return  <div>
                  {this.state.aaa}
                </div>
    }
}
export default MensagensExibidas