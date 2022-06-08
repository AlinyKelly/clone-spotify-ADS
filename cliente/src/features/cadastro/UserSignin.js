import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { user_login } from "../../components/UserFunc";

export default function UserSignin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ dadosInvalidos: '' });
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();

    axios.get(`http://mario.software:3001/usuario?email=${email}`)
      // json-server --watch db.json --port 3001
      .then((res) => {
        const usuario = res.data[0];
        console.log(usuario)

        if (usuario.senha !== senha) {
          setErros({ dadosInvalidos: 'Dados Inválidos' });
          return

        }
        user_login(usuario);
        navigate('/inicio');
      })

  }

  return (
    <div className="container ">
      {erros.dadosInvalidos && (<div className='mt-3 alert alert-danger'> {erros.dadosInvalidos}</div>)}

      <h1 className="pb-3 pt-3">Entre e escute suas músicas.</h1>

      <button type="button" className="btn btn-outline-primary btn-lg ">Entre com sua conta Facebook</button>
      <br /> <br />
      <button type="button" className="btn btn-outline-success btn-lg">Entre com sua conta Google</button>
      <br /> <br /> <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Digite seu Email:</label>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Digite senha:</label>
          <input type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}

            className="form-control" id="exampleInputPassword1"></input>
        </div>

        <br /><br />
        <button type="submit" className="btn btn-success mb-3" >Enviar</button>
      </form>
    </div>
  )
}
