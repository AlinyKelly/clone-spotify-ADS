import React from 'react'
import spotify_logo from '../_assets/img/Spotify_Logo_RGB_White.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { user_get_userdata } from "../components/UserFunc";

export default function Navbar() {
  const [nomeUsuario, setNomeUsuario] = useState([]);

  const user_data = user_get_userdata();

  useEffect(() => {
    user_data ? setNomeUsuario(user_data.nome) : setNomeUsuario("");

    console.log(user_data)
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-black navbar-black">
        <div className="container">
          <a className="navbar-brand">
            <Link to="/"><img src={spotify_logo} alt="Spotify" style={{ width: 100 }} className="rounded-pill" /></Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Premium</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">Support</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Baixar</a>
              </li>
            </ul>
            <div className="navbar-divider"></div>
            <ul className="navbar-nav">
              <li className="nav-item" style={{ display: !nomeUsuario ? 'block' : 'none' }}>
                <Link className="nav-link" to="/cadastro">Inscrever-se</Link>
              </li>
              <li className="nav-item" style={{ display: !nomeUsuario ? 'block' : 'none' }}>
                <Link className="nav-link" to="/UserSignin">Entrar</Link>
              </li>
              <li style={{ display: nomeUsuario ? 'block' : 'none' }}>
                <Link className='nav-link' to='/editar' > {nomeUsuario} </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}