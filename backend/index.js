const APP_PORT = 3001;
const APP_HOST = '192.168.1.102';

const express = require('express');

const cors = require('cors');

const api = require('./apiControllers');

const server = express();

server.use(express.json());

server.use(cors());

// buscar playlist por ID
server.get('/playlists/:id', api.getPlaylistbyId);

// buscar playlist por ID
server.get('/playlist/:nome', api.getPlaylistbyName);

// editar playlist
server.get('/playlists', api.getPlaylists);

// cadastrar playlist
server.post('/playlists', api.createPlaylist);

// cadastrar usuario
server.post('/usuario', api.createUser);

// login (buscar usuário)
server.get('/usuario', api.getUser);

// editar usuário
server.put('/usuario', api.editUser);

// cadastrar musica
server.post('/musica', api.createMusic);

// buscar musica por nome
server.get('/musica', api.getMusics);

// buscar musica por id
server.get('/musica/:id', api.getMusicsbyId);

// editar playlist
server.put('/playlists/:id', api.editPlaylist);

// delete playlist
server.delete('/playlists/:id', api.deletePlaylist);

server.listen(APP_PORT, APP_HOST, () => {
    console.log(`Servidor ${APP_HOST} em execução na porta: ${APP_PORT}`);
});