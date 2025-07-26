import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { usuario, senha };

    try {
      const response = await fetch('https://localhost:7137/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // const data = await response.json();

      if (response.ok) {
        navigate('/home');
        
      } else {
        toast.error("Problema ao efetuar login");
      }
    } catch (err) {
      toast.error("Verifique sua conexão com a API");
      console.error('Erro na requisição:', err);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />

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
    </>
  );
}