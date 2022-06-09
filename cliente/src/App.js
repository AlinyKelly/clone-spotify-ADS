import axios from 'axios';
import Navbar from './components/Header.js';
import Iniciar from './features/Inicio/Inicio.js';
import Playlist from './features/music/playlist.js';
import MyPlaylist from './features/music/myPlaylist.js';
import Banner from './features/home/home.js';
import Footer from './components/Footer.js';
import Cadastro from './features/cadastro/cadastro';
import Faq from './features/faq/Faq';
import UserSignin from './features/cadastro/UserSignin.js';
import Editar from './features/cadastro/editar';
import { Route, Routes } from 'react-router';

function App() {

  /*const PlaylistRoute = () => {
    axios.get('http://localhost:3001/Playlists')
      .then((res) => {
        const playlists = res.data;
        playlists.map((p) => {
          return (<Route path={"/playlist/" + p.nome} element={<Playlist nome={p.nome} />} />);
        });
      })
      return (<></>);
  }*/

  return (
    <div className="App">
      <Routes>
        <Route path="/inicio" element={<Iniciar />} />
        <Route path="/myPlaylist" element={<MyPlaylist />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/" element={<Banner />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/UserSignin" element={<UserSignin />} />
        <Route path="/editar" element={<Editar />} />
      </Routes>
    </div>
  );
}

export default App;
