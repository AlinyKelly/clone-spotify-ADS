import React from 'react'
import axios from 'axios';
import { PlaylistsMock } from "../../__mocks__/PlaylistMock"
import Play from "../../components/Player"
import Sidebar from '../../components/Sidebar'
import { useLocation } from 'react-router-dom';

//const query = new URLSearchParams(this.props.location.search);

//const music = query.get('p');
//console.log(music);

/*
importa o PlaylistList() aqui e chama ele lá em baixo
*/

var playlist = '';

function CriarlistaMusica() {
  let contador = 0;
  const music_obj = PlaylistsMock.find(item => item.nome === playlist);
  //console.log(music_obj.musicas.length);
  const dados = music_obj.musicas.map(
    (p) =>
      <tr>
        <th scope="row">{++contador}</th>
        <td>{p.nome}</td>
        <td>{p.album}</td>
        <td></td>
        <td><Play musica={p.src} /></td>
      </tr>
  );
  return (dados);
}

export default function Playlist() {
  //const queryParams = new URLSearchParams(window.location.search)
  //playlist = queryParams.get("p");
  // /playlist/pop/
  const location = useLocation();
  console.log(location.pathname);
  playlist = ``;//props.nome;
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col playlist p-5">
          <span className="fs-5">Playlist</span>
          <h1 className="fw-bold music-title">{playlist}</h1>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">TÍTULO</th>
                <th scope="col">ÁLBUM OU PODCAST</th>
                <th scope="col">DATA DE LANÇAMENTO</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <CriarlistaMusica />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}