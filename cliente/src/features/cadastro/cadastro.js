import { hide } from '@popperjs/core';
import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { user_login, user_logout, user_logado, user_get_userdata } from "../../components/UserFunc";



export default function Cadastro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidacao, setEmailValidacao] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState("");

  const [list, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      nome,
      email,
      emailValidacao,
      senha,
      genero,
      nascimento
    }
    if (nome &&
      email &&
      email == emailValidacao &&
      senha &&
      genero &&
      nascimento) {
      setList((ls) => [...ls, data])
      alert('Seu cadastro foi efetuado com sucesso')
      setNome("")
      setEmail("")
      setEmailValidacao("")
      setSenha("")
      setGenero("")
      setNascimento("")


    } else {
      alert(' Erro !' + "\n" + "\n" + '- Preencha todos os campos ' + "\n" + "\n" + '- Confirme seu Email ')
    }

    const usuario = {
      nome,
      email,
      senha,
      genero,
      nascimento,
      playlists: [],
    }

    axios.post(`http://mario.software:3001/usuario`, usuario)
      .then((res) => {
        user_login(usuario);
      })
  }

  

  return (
    <>
      <div className="container ">

        {/* <img src="Spotify_Logo_Black.png"  alt="Spotify" height="180px" width="180px"> */}



        <h1 className="pb-3 pt-3">Cadastre-se para escutar suas músicas.</h1>

        <button type="button" className="btn btn-outline-primary btn-lg ">Inscreva-se com sua conta Facebook</button>
        <br /> <br />
        <button type="button" className="btn btn-outline-success btn-lg">Inscreva-se com sua conta Google</button>
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
            <label for="confirmexampleInputEmail1" className="form-label">Confirme seu Email:</label>
            <input type="email"
              value={emailValidacao}
              onChange={(e) => setEmailValidacao(e.target.value)}
              className="form-control" id="confirmexampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Crie sua senha:</label>
            <input type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}

              className="form-control" id="exampleInputPassword1"></input>
          </div>
          <div className="mb-3">
            <label for="boxapelido" className="form-label">Como prefere ser chamado:</label>
            <input type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="form-control" id="boxapelido" aria-describedby="emailHelp"></input>
            <div id="emailHelp" className="form-text">Isso vai aparecer no seu perfil.</div>
          </div>
          <div className="mb-3">
            <label for="inputdate" className="form-label">Qual sua data de nascimento:</label>
            <input type="date"
              onChange={(e) => setNascimento(e.target.value)}
              className="form-control" id="inputdate" aria-describedby="emailHelp"></input>
          </div>

          <br />


          <h5>Selecione seu Gênero:</h5>
          <div className="form-check">
            <input className="form-check-input" type="radio"
              value={'Homem'}
              onChange={(e) => setGenero(e.target.value)}
              name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label className="form-check-label" for="flexRadioDefault1">
              Homem
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio"
              value={'Mulher'}
              onChange={(e) => setGenero(e.target.value)}
              name="flexRadioDefault" id="flexRadioDefault2" ></input>
            <label className="form-check-label" for="flexRadioDefault2">
              Mulher
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              value={'Não-binário'}
              onChange={(e) => setGenero(e.target.value)}
              type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
            <label className="form-check-label" for="flexRadioDefault3">
              Não-binário
            </label>
          </div>

          {/* Checkbox envio de notificao para email */}

          {/* <div className="form-check">
               <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"> </input>
               <label className="form-check-label" for="defaultCheck1">
                 Quero receber emails de marketing do Spotify.
               </label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"> </input>
               <label className="form-check-label" for="defaultCheck2">
                 Eu autorizo o compartilhamento dos meus dados com a equipe do Spotify.
               </label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value="" id="defaultCheck3"> </input>
               <label className="form-check-label" for="defaultCheck3">
                 Eu concordo com os Termos de uso do Spotify.
               </label>
             </div> */}

          <br />
          <button type="submit" className="btn btn-success mb-3" >Enviar</button>
        </form>

        {/* SalvandoDados de usuario  */}

        {
          list.map((a) => <div>
            <ul className='list-group'>
              <h1 className='mb-3 '>Bem Vindo(a), {a.nome} :</h1>
              <li className='list-group-item'>{'Nome : ' + a.nome}</li>
              <li className='list-group-item'>{'Email : ' + a.email}</li>
              <li className='list-group-item placeholder bg-light'>{'Senha : *********'}</li>
              <li className='list-group-item'>{'Gênero : ' + a.genero}</li>
              <li className='list-group-item mb-4'>{'Data de Nascimento : ' + a.nascimento}</li>
            </ul>
          </div>)
        }



      </div>

    </>
  )
}
