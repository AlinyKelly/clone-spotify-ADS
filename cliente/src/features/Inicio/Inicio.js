import axios from 'axios';
import React, { Component } from 'react';
import { useState } from 'react';
import Playlistlist from '../../components/Playlist.js'
import Sidebar from '../../components/Sidebar'
import MusicPlayer from '../../components/MusicPlayer'
import { user_get_userdata } from "../../components/UserFunc";
import { PlaylistsMock } from "../../__mocks__/PlaylistMock"
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import _ from 'lodash'

const source = [
  { title: '', description: '', playlist_id: null, music_id: null }
];

const initialState = {
  loading: false,
  results: [],
  value: '',
}

axios.get('http://mario.software:3001/playlists')
  .then((res) => {
    const playlists = res.data;
    playlists.map((p, p_index) =>
      p.musicas.map((m, m_index) =>
        source.push({ title: m.nome, description: m.album, playlist_id: p_index, music_id: m_index })
      )
    );
  })

/*PlaylistsMock.map((p, p_index) =>
  p.musicas.map((m, m_index) =>
    source.push({ title: m.nome, description: m.album, playlist_id: p_index, music_id: m_index })
  )
);*/

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

var is_gambiarra = true;

export default function Inicio() {

  const [Playlists, setPlaylists] = useState([]);
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state
  const user_data = user_get_userdata();

  if (is_gambiarra) {
    axios.get('http://mario.software:3001/playlists')
      .then((res) => {
        setPlaylists(<Playlistlist data={res.data} />);
        console.log(res.data);
      })
    is_gambiarra = false;
  }

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

  let playlist_id = null;
  let music_id = null;

  const music_obj = source.find(item => item.title === value);
  if (music_obj != undefined) {
    playlist_id = music_obj.playlist_id;
    music_id = music_obj.music_id;
  }
  else {
    playlist_id = null;
    music_id = null;
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col playlist p-4">
            <div className="container">
              <div className="row">
                <div className="col-5">
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
                  <h5 className='text-center'>{"Olá, " + user_data.nome}</h5>
                </div>
              </div>
            </div>
            <h3 className="color-white mt-5">Playlists</h3>
            <div className="card-group">
              {Playlists}
            </div>
          </div>
        </div>
      </div>
      <MusicPlayer playlist={playlist_id} music={music_id} />
    </div>
  )
}