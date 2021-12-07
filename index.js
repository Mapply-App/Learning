const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

const dic = {}
let key = 0

io.on('connection', (socket) => {
    console.log('a user connected');

    key++

    dic[socket.id] = `Joueur n°${key}`

    io.emit('message', `=> ${dic[socket.id]} vient d'arriver : J'espère que tu as apporté la pizza !`)

    socket.on('message', (message) =>     {
        console.log(message);
        io.emit('message', `${dic[socket.id]} : ${message}` );   
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );
