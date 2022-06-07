import { Link } from 'react-router-dom';
import play_img from '../_assets/img/play-grey-button.png';
import _ from 'lodash';

function PlaylistList(props) {

  if(!props.data){
    return (<></>);
  }

  const dados = props.data.map(
    (p) =>
      <div className="playlist-element card m-3 p-2">
        <img className="card-img-top" src={play_img} alt="Card image cap" />
        <div className="card-body">
          <Link to={"/playlist?nome=" + p.nome}>
            <h5 className="card-title">{p.nome}</h5>
            <p className="card-text">Um mix de músicas e notícias feito para você</p>
          </Link>
        </div>
      </div>
  );
  return (dados);
}

export default PlaylistList;