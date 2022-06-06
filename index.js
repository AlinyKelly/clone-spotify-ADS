const APP_PORT = 7890;
const APP_HOST = '192.168.1.102';

const express = require('express');

const cors = require('cors');

const api = require('./apiControllers');

const server = express();

server.use(express.json());

server.use(cors());

// buscar playlist por ID
server.get('/playlists/:id', api.getPlaylist);

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

// editar playlist
server.put('/playlists/:id', api.editPlaylist);

// delete playlist
server.delete('/playlists/:id', api.deletePlaylist);

server.listen(APP_PORT, APP_HOST, () => {
    console.log(`Servidor ${APP_HOST} em execução na porta: ${APP_PORT}`);
});