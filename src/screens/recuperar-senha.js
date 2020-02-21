import React from 'react';


class Recuperar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      email: 'nome@email.com'
    };

render() {
  return (
    <div>
      <form>
          <h2>Recuperar Senha</h2>
        <label>
          <p>Email</p>
          <input
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            placeholder={this.state.email}
          />
        </label>
        <input type="submit" value="Voltar"/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>

export default Recuperar;