var io = require('socket.io')();

var players = {};

// Listen for new connections from clients (socket)
io.on('connection', function (socket) {

    socket.on('register-player', function (initials) {
        players[socket.id] = initials;
        io.emit('update-player-list', Object.values(players));
    });

// When the player disconnects it notifies you
    socket.on('disconnect', function () {
        delete players[socket.id];
        io.emit('update-player-list', Object.values(players));
      });

	socket.on('add-circle', function (data) {
    io.emit('add-circle', data);
     });

	socket.on('clear-display', function () {
    circles.innerHTML= '';
     });
});

// io represents socket.io on the server - let's export it
module.exports = io;