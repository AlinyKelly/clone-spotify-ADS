import React from "react";
import axios from "axios";
import { useState } from "react";
import Play from "../../components/Player";
import Sidebar from "../../components/Sidebar";

//const query = new URLSearchParams(this.props.location.search);

//const music = query.get('p');
//console.log(music);

/*
importa o PlaylistList() aqui e chama ele lá em baixo
*/

let contador = -1;

export default function Playlist() {
  const queryParams = new URLSearchParams(window.location.search);
  let playlistName = queryParams.get("nome");

  const [musicLists, setMusicLists] = useState([]);

  if(contador == -1){
    contador = 0;
    axios.get("http://mario.software:3001/playlist/" + playlistName)
    .then((res) => {
      const playlists = res.data;
      setMusicLists(playlists.musicas);
    });
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col playlist p-5">
          <span className="fs-5">Playlist</span>
          <h1 className="fw-bold music-title">{playlistName}</h1>
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
              {
                musicLists.map(
                  (m) =>
                  <tr>
                    <th scope="row">{++contador}</th>
                    <td>{m.nome}</td>
                    <td>{m.album}</td>
                    <td></td>
                    <td>
                      <Play musica={m.src} />
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {
      console.log(musicLists)
    }
    </div>
  );
}
