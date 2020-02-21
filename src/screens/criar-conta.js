import React, { Component } from 'react';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class Conta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        nome: 'Nome',
        email: 'nome@email.com',
        senha: 'Digite sua senha'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      
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
          <form onSubmit={this.handleSubmit}>
              <h2>Criar Conta</h2>
            <label className="label">
              <p className="box-name">Nome</p>
              <input className="input"
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                placeholder={this.state.nome}
              />
            </label>
            <label className="label">
              <p className="box-email">E-mail</p>
              <input className="input"
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                placeholder={this.state.email}
              />
            </label>
            <label>
              <p className="box-senha">Senha</p>
              <input className="input"
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange}
                placeholder={this.state.senha}
              />
            </label>
            <div className="box-termos">
              <p>Clique abaixo para concordar com nossos Termos de Serviço e se inscrever.</p>
            </div>
            <input className="button-create" type="submit" value="Concordar e criar conta"/>
            <input className="button-back" type="submit" value="Voltar para o login"/>
          </form>
        </div> 
      );
    }
  }
  
export default Conta;