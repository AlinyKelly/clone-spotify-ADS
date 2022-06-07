import { hide } from '@popperjs/core';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { user_login, user_logout, user_logado, user_get_userdata } from "../../components/UserFunc";

export default function Cadastro(props) {
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {

    const user_data = user_get_userdata();

    if (user_logado()) {
      setUsuarioLogado(user_data)
      setNome(user_data.nome)
      setSenha(user_data.senha)
      setEmail(user_data.email)
    }

  }, [])

  function handleSubmit(event) {
    event.preventDefault();

    const usuario = {
      nome,
      email,
      senha,
    }

    axios.put(`http://mario.software:3001/usuario?email=${usuarioLogado.email}`, usuario)
      .then((res) => {
        user_login(usuario);
      })
  }

  return (
    <>
      <div className="container mt-3">
        <ul className='list-group'>
          <h1 className='mb-3 '>Olá {nome}, <br />
            Seja bem vindo ao seu perfil :</h1>
          <li className='list-group-item'>{'Nome : ' + nome}</li>
          <li className='list-group-item'>{'Email : ' + email}</li>
          <li className='list-group-item placeholder bg-light'>{'Senha : ' + senha}</li>
        </ul>
        <br />
        <hr />
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label for="boxapelido" className="form-label">Edite seu Nome:</label>
            <input type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="form-control" id="boxapelido" aria-describedby="emailHelp"></input>
          </div>

          <div className="mt-3 mb-3">
            <label for="exampleInputEmail1" className="form-label">Edite seu Email:</label>
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Edite sua senha:</label>
            <input type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}

              className="form-control" id="exampleInputPassword1"></input>
          </div>
          <br />
          <div className='row'>
            <button type="submit" className="btn btn-success mb-3 " >Enviar</button>
            <Link  to="/"><button type='button' className=' btn btn-danger mb-3 ' onClick={user_logout}>Logout</button></Link>
          </div>
        </form>
      </div>
    </>
  )
}
