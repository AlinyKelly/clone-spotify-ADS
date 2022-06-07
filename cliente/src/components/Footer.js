import React from 'react'
import { Link } from 'react-router-dom';
import '../_assets/css/footer.css'
import spotify_logo from '../_assets/img/Spotify_Logo_RGB_White.png';
export default function Footer() {
  return (
    <div>
      <div className="footer bs-black">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <img src={spotify_logo} alt="Spotify" style={{ width: 100 }} className="rounded-pill" />
            </div>
            <div className="col-sm-2">
              <p>EMPRESA</p>
              <a href='#'>Sobre</a>
              <a href='#'>Emprego</a>
              <a href='#'>For the Record</a>
            </div>
            <div className="col-sm-2">
              <p>COMUNIDADES</p>
              <a href='#'>Desenvolvedores</a>
              <a href='#'>Publicidade</a>
              <a href='#'>Investidores</a>
              <a href='#'>Fornecedores</a>
            </div>
            <div className="col-sm-2">
              <p>LINKS ÚTEIS</p>
              <Link to="/faq"><a href='#'>Suporte</a></Link>
              <a href='#'>Player da Web</a>
              <a href='#'>Aplicativo móvel grátis</a>
            </div>
            <div className="col-sm-4">
              <i className="fa-brands fa-instagram" style={{ color: "#fff", fontSize: 32, }}></i>
              <i className="fa-brands fa-twitter" style={{ color: "#fff", fontSize: 32, }}></i>
              <i className="fa-brands fa-facebook-f" style={{ color: "#fff", fontSize: 32, }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
