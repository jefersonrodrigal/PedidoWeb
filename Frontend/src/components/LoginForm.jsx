import { useState } from 'react';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { usuario, senha };

    try {
      const response = await fetch('https://localhost:7137/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data)
        alert('Login autorizado');
      } else {
        alert('Login inválido');
      }
    } catch (err) {
      console.error('Erro na requisição:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button className="btn-login" type="submit">login</button>
        </div>
      </div>
    </form>
  );
}