import openSocket from 'socket.io-client';
const  socket = openSocket('http://192.168.0.15:8000');


function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToTodos(cb){
    socket.on('todo', todo =>cb(null, todo));
}

function emitTodo(newTodo){
    socket.emit('todo', newTodo);
}

export { subscribeToTimer, subscribeToTodos, emitTodo };