import React from 'react'
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { PlaylistsMock } from "../__mocks__/PlaylistMock"

let sel_playlist_id = null;
let sel_music_id = null;

const source = [
  { title: '', description: '', playlist_id: null, music_id: null }
];

const initialState = {
  loading: false,
  results: [],
  value: '',
}

PlaylistsMock.map((p, p_index) =>
  p.musicas.map((m, m_index) =>
    source.push({ title: m.nome, description: m.album, playlist_id: p_index, music_id: m_index })
  )
);

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

function SearchElement() {

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
  console.log(music_obj);
  if (music_obj != undefined) {
    sel_playlist_id = music_obj.playlist_id;
    sel_music_id = music_obj.music_id;
  }
  else {
    sel_playlist_id = null;
    sel_music_id = null;
  }

  return (
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
  )
}

export {SearchElement, sel_playlist_id, sel_music_id}