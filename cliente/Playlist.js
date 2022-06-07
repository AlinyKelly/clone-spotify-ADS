import {PlaylistsMock} from "../__mocks__/PlaylistMock"
import { Link } from 'react-router-dom';
import play_img from '../_assets/img/play-grey-button.png';
import axios from "axios";

function PlaylistList() {
  const [Playlists, setPlaylists] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:3001/Playlists')
    .then((res) => setPlaylists(res.data))
  },[]  )

  const res = Playlists.map((Playlists => {
    return(
      <Link to={`/inicio/${Playlists.id}`} key={Playlists.id}>
        <Playlists nome={Playlists.nome}/>
      </Link>
    )
  })
  )
}
  /*const dados = PlaylistsMock.map(
    (p) =>
      <div className="playlist-element card m-3 p-2">
        <img className="card-img-top" src={play_img} alt="Card image cap" />
        <div className="card-body">
          <Link to={"/playlist/" + p.nome}>
            <h5 className="card-title">{p.nome}</h5>
            <p className="card-text">Um mix de músicas e notícias feito para você</p>
          </Link>
        </div>
      </div>
  );
  return (dados);
}*/

export default PlaylistList;