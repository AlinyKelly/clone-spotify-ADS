const express = require('express');

const server = express();

server.use(express.json());

const playlists = [
    {
        id: 1,
        nome: "Play1"
    },
    {
        id: 2,
        nome: "Play2"
    },
    {
        id: 3,
        nome: "Play3"
    },
    {
        id: 4,
        nome: "Play4"
    },
];

const usuarios = [
    {
        nome: "Mario Mamede",
        email: "mariomamede@live.com",
        senha: "123456",
        genero: "Masculino",
        nascimento: "10/10/1996",
    },
    {
        nome: "Artur",
        email: "artur@gmail.com",
        senha: "123456",
        genero: "Masculino",
        nascimento: "10/10/1996",
    },
];

const musicas = [
    {
        nome: "One More Hour",
        src: "/musica.mp3",
        album: "The Slow Rush",
        artista: "Tame Impala",
    },
    {
        nome: "Let It Happen",
        src: "/musica.mp3",
        album: "Currents",
        artista: "Tame Impala",
    },
];

// listar playlists
server.get('/playlists', (req, res) => {
    return res.json(playlists);
})

// buscar playlist por ID
server.get('/playlists/:id', (req, res) => {
    const { id } = req.params;
    return res.json(playlists.find((p) => p.id == id));
})

// cadastrar playlist
server.post('/playlists', (req, res) => {
    const play = req.body;
    playlists.push(play)
    return res.json(play);
})

// cadastrar usuario
server.post('/usuario', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario)
    return res.json(usuario);
})

// login (buscar usuário)
server.get('/usuario', (req, res) => {
    const { email } = req.query;
    return res.json(usuarios.find((u) => u.email == email));
})

// editar usuário
server.put('/usuario', (req, res) => {
    const { email } = req.query;
    const data = req.body;
    let index = usuarios.findIndex((u) => u.email == email);

    if (index == -1)
        return res.json({ msg: "usuario não encontrado" });

    return res.json(usuarios[index] = data);
})

// buscar musica por nome
server.get('/musica', (req, res) => {
    const { nome } = req.query;
    return res.json(musicas.find((m) => m.nome == nome));
})

// editar playlist
server.put('/playlists', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    let index = playlists.findIndex((p) => p.id == id);

    if (index == -1)
        return res.json({ msg: "playlist não encontrada" });

    playlists[index].nome = nome;
    return res.json(playlists[index]);
})

// bonus
server.delete('/playlists', (req, res) => {
    const { nome } = req.query;

    let playlist_idx = playlists.findIndex((p) => p.nome == nome);

    if (playlist_idx == -1) {
        res.status(202);
        return res.json({ msg: "Playlist não encontrada!" });
    }

    playlists.splice(playlist_idx, 1);

    return res.json({ msg: "Playlist removida!" });
});

server.listen(3001);