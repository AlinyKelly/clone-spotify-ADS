const express = require('express');

const { MongoClient } = require('mongodb');

const api = require('./apiControllers');

const server = express();

server.use(express.json());

// listar playlists
server.get('/playlists', api.getPlaylists);

// buscar playlist por ID
server.get('/playlists/:id', api.getPlaylist);

// cadastrar playlist
server.post('/playlists', api.createPlaylist);

// cadastrar usuario
server.post('/usuario', api.createUser);

// login (buscar usuário)
server.get('/usuario', api.getUser);

// editar usuário
server.put('/usuario', api.editUser);

// buscar musica por nome
server.get('/musica', api.getMusics);

// editar playlist
server.put('/playlists/:id', api.editPlaylist);

// delete playlist
server.delete('/playlists/:id', api.deletePlaylist);

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mongo-spotify';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('spotify');

    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

server.listen(process.env.port || 3001, () => {
    console.log('Servidor em execução na porta: ');
});