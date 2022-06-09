import React from "react";
import Navbar from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className="mb-5" style={{ backgroundColor: "black" }}>
        <div>
          <h1 style={{ textAlign: "center", color: "white" }}>
            Como Podemos Ajudar?
          </h1>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Qual a sua duvida.."
          />
          <button className="btn btn-primary" type="button">
            Buscar
          </button>
        </form>
        <div id="accordion">
          <div className="card" style={{ top: 100 }}>
            <div className="card-header">
              <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                Não consegue reproduzir faixas pelo Spotify?
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Verifique se sua conexão com a internet está ativada. Se sim,
                tente reiniciar o aplicativo ou verificar se o app está no modo
                offline, onde você só poderá escutar as faixas que você tiver
                feito Download.
              </div>
            </div>
          </div>
          <div className="card" style={{ top: 100 }}>
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseTwo"
              >
                Não lembra suas informações de login?
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Se você não se lembrar da sua senha, use a página de redefinição
                de senha. Se não se lembrar do seu e-mail ou nome de usuário,
                acesse a página de redefinição de senha e insira os endereços de
                e-mail que você pode ter usado para criar uma conta. Quando o
                endereço registrado no Spotify for inserido, aparecerá uma
                mensagem dizendo que o e-mail de redefinição de senha foi
                enviado. Observação: existem várias maneiras de criar uma conta:
                usando um e-mail, um número de telefone, o Facebook, a Apple ou
                o Google. Tente fazer login usando essas opções para localizar
                sua conta.
              </div>
            </div>
          </div>

          <div className="card" style={{ top: 100 }}>
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseThree"
              >
                Não conhece as vantagens do nossos planos?
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Spotify Free</th>
                      <th>Spotify Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mais de 50 milhões de músicas</td>
                      <td className="table-success">Sim</td>
                      <td className="table-success">Sim</td>
                    </tr>
                    <tr>
                      <td>Podcasts e audiolivros</td>
                      <td className="table-success">Sim</td>
                      <td className="table-success">Sim</td>
                    </tr>
                    <tr>
                      <td>Ouvir suas músicas em viagens internacionais</td>
                      <td className="table-danger">Por até 14 dias</td>
                      <td className="table-success">Sim</td>
                    </tr>
                    <tr>
                      <td>Escolher qual faixa escutar no app móvel</td>
                      <td className="table-danger">
                        Somente em Playlists selecionadas
                      </td>
                      <td className="table-success">Sim</td>
                    </tr>
                    <tr>
                      <td>Baixar Músicas e Escutalas sem Anuncios</td>
                      <td className="table-danger">Não</td>
                      <td className="table-success">Sim</td>
                    </tr>
                    <tr>
                      <td>Baixar Podcasts</td>
                      <td className="table-success">Sim</td>
                      <td className="table-success">Sim</td>
                    </tr>
                    <tr>
                      <td>Audio em altissima qualidade</td>
                      <td className="table-danger">Não</td>
                      <td className="table-success">Sim</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
