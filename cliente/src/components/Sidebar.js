import { useState } from "react";
import { Link } from "react-router-dom";
import spotify_logo from "../_assets/img/Spotify_Logo_RGB_White.png";
import axios from "axios";
import { user_get_userdata } from "../components/UserFunc";

let one_init = true;

let user = user_get_userdata();

function Sidebar() {
  const [userPlaylists, setUserPlaylists] = useState([]);

  if(one_init){
    one_init = false;
    const user_data = user_get_userdata();
    if(user_data.playlist != undefined){
      setUserPlaylists(user_data.playlist);
    }
  }

  const criar_playlist = () => {

    const index = user.playlists.length;

    user.playlists.push({ id: index, nome: "Minha playlist nº " + (index + 1), musicas: [] });

    delete user._id;

    axios.put(`http://mario.software:3001/usuario?email=${user.email}`, user)
      .then((res) => {
        console.log(res);
      })

    setUserPlaylists([
      ...userPlaylists,
      { id: index, nome: "Minha playlist nº " + (index + 1), musicas: [] },
    ]);
  };

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-black">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mt-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <Link to="/inicio">
            <img
              src={spotify_logo}
              alt="Spotify"
              style={{ width: "50%" }}
              className="rounded-pill"
            />
          </Link>
        </a>
        <div className="row w-100 mt-4">
          <div className="col-md-2">
            <div className="imgAbt text-center">
              <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
              </svg>
            </div>
          </div>
          <div className="col-md-8">
            <Link to="/inicio">
              <span className="ms-1 d-none d-sm-inline">Início</span>
            </Link>
          </div>
        </div>

        <div className="row w-100 mt-4">
          <div className="col-md-2">
            <div className="imgAbt text-center">
              <svg
                role="img"
                height="24"
                width="24"
                className="Svg-sc-1bi12j5-0 jgfuCe search-icon"
                viewBox="0 0 24 24"
              >
                <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
              </svg>
            </div>
          </div>
          <div className="col-md-8">
            <span className="ms-1 d-none d-sm-inline">Buscar</span>
          </div>
        </div>

        <div className="row w-100 mt-4">
          <div className="col-md-2">
            <div className="imgAbt text-center">
              <svg
                role="img"
                height="24"
                width="24"
                className="Svg-sc-1bi12j5-0 jgfuCe collection-icon"
                viewBox="0 0 24 24"
              >
                <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
              </svg>
            </div>
          </div>
          <div className="col-md-8">
            <span onClick={criar_playlist} className="ms-1 d-none d-sm-inline">
              Biblioteca
            </span>
          </div>
        </div>

        <Link to={window.location.pathname} onClick={criar_playlist}>
          <div className="row w-140 mt-5">
            <div>
              <div className="d-inline-block imgAbt bg-white text-center rounded-1">
                <svg
                  role="img"
                  height="12"
                  width="12"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  style={{ fill: "black" }}
                >
                  <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
                </svg>
              </div>
              <span className="d-inline-block ms-2 float-right">
                Criar playlist
              </span>
            </div>
          </div>
        </Link>

        <div className="divider mt-3"></div>

        <div className="row w-100 mt-2">
          {userPlaylists.map((p) => (
            <Link to={"/myPlaylist" + "?id=" + p.id}>
              <span className="ms-1 mt-1 d-none d-sm-inline">{p.nome}</span>
            </Link>
          ))}
        </div>

        <ul
          className="nav nav-pills flex-column mb-sm-auto w-100 mb-0 align-items-center align-items-sm-start"
          id="menu"
        ></ul>

        <div className="row w-100 mb-4">
          <div className="col-md-2">
            <div className="imgAbt text-center">
              <svg
                role="img"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                className="Svg-sc-1bi12j5-0 jgfuCe"
              >
                <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
                <path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
              </svg>
            </div>
          </div>
          <div className="col-md-8">
            <span className="ms-1 d-none d-sm-inline">Instalar app</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
