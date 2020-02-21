import React from 'react';
import logo from './logo.svg';
import './App.css';
import Petronect from './screens/petronect';
import NotePadImage from './assets/image.svg';
import EyeOpen from './assets/eyeOpen.svg'
import EyeClose from './assets/eyeClose.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nome: 'Digite seu e-mail',
      senha: 'Digite sua senha'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state.eye ? this.renderTrue : this.renderFalse;
    
  }

  handleChange(event) {
   this.setState({value: event.target.value});
   this.setState({value: event.target.senha});
  }

  handleSubmit(event) {
    alert('Está faltando o @ ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form className="box-form" onSubmit={this.handleSubmit}>
          <Petronect/>
          <label>
            <p className="box-name">E-mail</p>
            <input className="input"
              type="text" 
              value={this.state.value} 
              onChange={this.handleChange} 
              placeholder={this.state.nome}
            />
          </label>
          <label>
            <p className="box-senha">Senha</p>
            <input className="input"
              type="password" 
              value={this.state.value} 
              onChange={this.handleChange}
              placeholder={this.state.senha}
            />
            <img className="eyeOpen-password" src={EyeOpen}/>
            <img className="eyeClose-password" src={EyeClose}/>
          </label>
          <input className="button-entrar" type="submit" value="Entrar" />
          <div className="box-recuperacao">
            <p>Criar nova conta</p>
            <p>Recuperar Senha</p>
          </div>
        </form>
        <div className="box-annotation">
          <img className="annotation" src={NotePadImage}/>
          <span>
            <p className="annotation-paragraph">Defina suas notificações, receba contratos
           selecionados e esqueça como listas de mil itens.</p>
            <p className="annotation-paragraph1">Criar nova conta</p>
          </span>
        </div>
      </div>
      
    );
  }
}

export default App;

