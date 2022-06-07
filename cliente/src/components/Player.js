import React from 'react';

var is_play = false;

function Play(props) {
  let audio = new Audio(props.musica)

  const start_stop = () => {
    is_play = !is_play;
    is_play ? audio.play() : audio.pause();
  }

  return (
    <svg onClick={start_stop} height="32" role="img" width="32" viewBox="0 0 24 24" className="play"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
    </svg>
  );
}

//<svg onClick={start_stop} style={{display: is_play ? 'block' : 'none'}} height="18" role="img" width="18" viewBox="0 0 24 24" class="UIBT7E6ZYMcSDl1KL62g"><rect x="5" y="3" width="4" height="18" fill="currentColor"></rect><rect x="15" y="3" width="4" height="18" fill="currentColor"></rect></svg>
//<svg height="32" role="img" width="32" viewBox="0 0 24 24" class="UIBT7E6ZYMcSDl1KL62g"><rect x="5" y="3" width="4" height="18" fill="currentColor"></rect><rect x="15" y="3" width="4" height="18" fill="currentColor"></rect></svg>

export default Play;