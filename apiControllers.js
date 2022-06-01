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

// login (buscar usuário)
exports.getUser = function(req, res) {
    const { email } = req.query;
    return res.json(usuarios.find((u) => u.email == email));
};

// cadastrar usuario
exports.createUser = function(req, res) {
    const usuario = req.body;
    usuarios.push(usuario)
    return res.json(usuario);
};

// editar usuário
exports.editUser = function(req, res) {
    const { email } = req.query;
    const data = req.body;
    let index = usuarios.findIndex((u) => u.email == email);

    if (index == -1)
        return res.json({ msg: "usuario não encontrado" });

    return res.json(usuarios[index] = data);
};

// buscar musica por nome
exports.getMusics = function(req, res) {
    const { nome } = req.query;
    return res.json(musicas.find((m) => m.nome.includes(nome)));
}

// buscar playlist por ID
exports.getPlaylist = function(req, res) {
    const { id } = req.params;

    if(id) {
        return res.json(playlists.find((p) => p.id == id));
    }

    return res.json(playlists);
};

// cadastrar playlist
exports.createPlaylist = function(req, res) {
    const play = req.body;
    playlists.push(play)
    return res.json(play);
};

// editar playlist
exports.editPlaylist = function(req, res) {
    const { id } = req.params;
    const { nome } = req.body;
    let index = playlists.findIndex((p) => p.id == id);

    if (index == -1)
        return res.json({ msg: "playlist não encontrada" });

    playlists[index].nome = nome;
    return res.json(playlists[index]);
};

// delete playlist
exports.deletePlaylist = function(req, res) {
    const { id } = req.params;

    let index = playlists.findIndex((p) => p.id == id);

    if (index == -1) {
        res.status(202);
        return res.json({ msg: "Playlist não encontrada!" });
    }

    playlists.splice(index, 1);

    return res.json({ msg: "Playlist removida!" });
};