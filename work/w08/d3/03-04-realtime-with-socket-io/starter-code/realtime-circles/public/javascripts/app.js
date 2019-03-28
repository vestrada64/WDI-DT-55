document.addEventListener("DOMContentLoaded", function() {

var socket = io();

socket.on('add-circle', function (data) {
  // console.log(data);
  addCircle(data);
});

socket.on('clear-display', function (data) {
  circles.innerHTML= '';
});

socket.on('update-player-list', function (data) {
  var playerList = '<li>' + data.join('</li><li>') + '</li>';
 players.innerHTML = playerList;
});
  
  var circles = document.getElementById('circles');
  var players = document.getElementById('players');
  var initials = '';

  circles.addEventListener('click', function(evt) {
    // addCircle(evt.clientX, evt.clientY, randomBetween(10,125), getRandomRGBA());
    socket.emit('add-circle', {
      initials,
      x: evt.clientX,
      y: evt.clientY,
      dia: randomBetween(20, 150),
      rgba: getRandomRGBA()
    });
  });

  document.getElementsByTagName('button')[0].addEventListener('click', function() {
    circles.innerHTML = '';
  });

  do {
    initials = getInitials();
  } while (initials.length < 2 || initials.length > 3);
  
  socket.emit('register-player', initials);

  do {
    initials = getInitials();
  } while (initials.length < 2 || initials.length > 3);

  function getInitials() {
    var input = prompt("Please enter your initials");
    return input ? input.toUpperCase() : '';
  }

  function addCircle({x, y, dia, rgba, initials}) {
    var el = document.createElement('div');
    el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
    el.style.top = y - Math.floor(dia / 2 + 0.5) + 'px';
    el.style.width = el.style.height = dia + 'px';
    el.style.backgroundColor = rgba;
    el.style.fontSize = Math.floor(dia / 3) + 'px';
    el.style.color = 'white';
    el.style.textAlign = 'center';
    el.style.lineHeight = dia + 'px';
    el.innerHTML = initials;
    circles.appendChild(el);
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomRGBA() {
    return ['rgba(', randomBetween(0, 255), ',', randomBetween(0, 255), ',',
      randomBetween(0, 255), ',', randomBetween(2, 10) / 10, ')'].join('');
  }

});
