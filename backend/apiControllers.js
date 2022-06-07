//https://irias.com.br/blog/tutorial-nodejs-mongodb-criando-um-crud/

const { MongoClient } = require('mongodb');

const MONGO_DB = 'spotify';
const MONGO_HOST = 'mongodb://localhost:27017';

// login (buscar usuário)
exports.getUser = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('users').find({ email: req.query.email }).toArray((err, result) => {
            if (err) throw err
            res.send(result);
        });
    });
};

// cadastrar usuario
exports.createUser = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        const usuario = req.body;
        database.collection('users').insertOne(usuario, (err) => {
            if (err) throw err
            res.status(201);
            res.json(usuario);
        });
    });
};

// editar usuário
exports.editUser = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('users').updateOne({ email: req.query.email }, { $set: req.body }, (err) => {
            if (err) throw err
            res.send();
        });
    });
};

// cadastrar musica
exports.createMusic = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        const music = req.body;
        database.collection('musics').insertOne(music, (err) => {
            if (err) throw err
            res.status(201);
            res.json(music);
        });
    });
};

// buscar musica por nome
exports.getMusics = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('musics').find({ nome: { $regex: req.query.nome } }).toArray((err, result) => {
            if (err) throw err
            res.send(result);
        });
    });
}

// buscar playlist por ID
exports.getPlaylist = function (req, res) {
    const { id } = req.params;
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('playlists').find({ "id": parseInt(id) }).toArray((err, result) => {
            if (err) throw err
            res.send(result);
        });
    });
};

// buscar playlists
exports.getPlaylists = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('playlists').find().toArray((err, result) => {
            if (err) throw err
            res.send(result);
        });
    });
};

// cadastrar playlist
exports.createPlaylist = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('playlists').insertOne(req.body, (err) => {
            if (err) throw err
            res.status(201);
            res.json(req.body);
        });
    });
};

// editar playlist
exports.editPlaylist = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('playlists').updateOne({ id: parseInt(req.params.id) }, { $set: { "nome": req.body.nome } }, (err) => {
            if (err) throw err
            res.send();
        });
    });
};

// delete playlist
exports.deletePlaylist = function (req, res) {
    MongoClient.connect(MONGO_HOST, (err, client) => {
        if (err) throw err
        const database = client.db(MONGO_DB);
        database.collection('playlists').deleteOne({ id: parseInt(req.params.id) }, (err) => {
            if (err) throw err
            res.send();
        });
    });
};