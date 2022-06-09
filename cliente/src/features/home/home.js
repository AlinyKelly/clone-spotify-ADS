import React from 'react'
import '../../_assets/css/banner.css'
import Navbar from '../../components/Header.js';
import Footer from '../../components/Footer.js';

export default function Banner() {
  return (
    <div>
      <Navbar />
      <div className="banner vh-100">
        <div className="row align-items-center vh-100">
          <div className="col-8 mx-auto">
            <h1 className="text-center">Escutar muda tudo</h1>
            <p className="text-center">Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
            <div className="button text-center">BAIXE O SPOTIFY FREE</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
