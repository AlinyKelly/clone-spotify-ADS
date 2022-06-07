import React from 'react'
import axios from 'axios';
import Play from "../../components/Player"
import { UserPlaylistsMock } from "../../__mocks__/PlaylistMock"
import Sidebar from '../../components/Sidebar'
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

var playlist_id = 0;
let sel_playlist_id = null;
let sel_music_id = null;

const source = [];
const playlist_data = [];

const initialState = {
  loading: false,
  results: [],
  value: '',
}

axios.get("http://mario.software:3001/musica").then((res) => {
  const musics = res.data;
  musics.map((m, m_index) =>
    source.push({
      id: m.id,
      title: m.nome,
      description: m.album
    })
  );
});

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

export default function MyPlaylist() {
  const queryParams = new URLSearchParams(window.location.search)

  playlist_id = queryParams.get("id");

  //if (UserPlaylistsMock.length==0)

  let playlist_name = UserPlaylistsMock[playlist_id].nome;

  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const music_obj = source.find(item => item.title === value);

  if (music_obj != undefined) {
    sel_playlist_id = music_obj.playlist_id;
    sel_music_id = music_obj.music_id;
  }
  else {
    sel_playlist_id = null;
    sel_music_id = null;
  }

  if (music_obj != undefined) {
    UserPlaylistsMock[playlist_id].musicas.push(playlist_data[sel_playlist_id].musicas[sel_music_id]);
  }

  const RemoveFromPlaylist = (index) => {
    UserPlaylistsMock[playlist_id].musicas.pop(index);
  };

  const MyMusicList = () => {
    let contador = 0;
    const dados = UserPlaylistsMock[playlist_id].musicas.map(
      (p) =>
        <tr>
          <th scope="row">{++contador}</th>
          <td>{p.nome}</td>
          <td>{p.album}</td>
          <td></td>
          <td><Play musica={p.src} /></td>
          <td><svg value={contador} onClick={() => { RemoveFromPlaylist(contador - 1);} } role="img" height="16" width="16" aria-label="Fechar" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></svg></td>
        </tr>
    );
    return (dados);
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col playlist p-5">
          <span className="fs-5">Playlist</span>
          <h1 className="fw-bold display-1">{playlist_name}</h1>
          <div className="divider mt-4 w-100"></div>
          <div className='mt-4'>
            <div className="row">
              <div className="col-5">
                <h3>Vamos incrementar sua playlist</h3>
                <Search
                  loading={loading}
                  placeholder='Artistas, músicas ou podcasts'
                  onResultSelect={(e, data) =>
                    dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                  }
                  onSearchChange={handleSearchChange}
                  results={results}
                  value={value}
                />
              </div>
              <div className="col-3">
              </div>
              <div className="col-4 float-right">
              </div>
            </div>
          </div>
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
            <tbody className='align-items-center'>
              <MyMusicList/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}