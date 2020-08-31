import React from 'react'

class Mensagem extends React.Component {
    state = {
        usuario: '',
        mensagem: ''
    }

    onChangeUsuario = (event) => {
        this.setState({usuario: event.target.value})
    }
    
    
    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    enviarMensagem = (event) => {
        const aaa  = event.target.usuario
        const bbb = event.target.mensagem
      
        const abc = []
        abc = abc.push(this.state.aaa)
    }

    render () {
       
        return  <form onSubmit={this.enviarMensagem}>
            <h1>{this.state.hin1}</h1>
                    <input
                        className={'input-usuario'}
                        placeholder={'Usuário'}
                        value={this.state.usuario}
                        onChange={this.onChangeUsuario}
                    />
                    <input
                        className={'input-mensagem'}
                        placeholder={'Mensagem'}
                        value={this.state.mensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <input type='submit'/>
                </form>
    }
}
export default Mensagem