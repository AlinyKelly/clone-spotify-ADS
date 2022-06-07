const PlaylistsMock = [
  { id: 1, nome: "Pop", musicas: [{nome: 'Música Pop', album: 'Nome do Album', src: '/music.mp3'}, {nome: 'Música Pop vol. 2', album: 'Nome do Album2', src: '/music.mp3'}] },
  { id: 2, nome: "Rock", musicas: [{nome: 'Música Rock', album: 'Nome do Album', src: '127.0.0.1/music.mp3'}] },
  { id: 3, nome: "Clássicos", musicas: [{nome: 'Música Clássicos', album: 'Nome do Album', src: '/music.mp3'}] },
  { id: 4, nome: "Indie", musicas: [{nome: 'Música Indie', album: 'Nome do Album', src: '127.0.0.1/music.mp3'}] },
];

const UserPlaylistsMock = [];

export {PlaylistsMock, UserPlaylistsMock};