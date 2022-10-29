var cors = require('cors');

var express = require('express');

var app = express();//express removes need to write servercreation code where we do reuire(http) then http.createServer blah blah
var server = app.listen(5001);

app.use(express.static('public'));
app.use(cors());

console.log('Test');

var socket = require('socket.io');
var io = socket(server,{cors:{origin:"*"}});//creates socket for the server that is listening on port 3000

//server side code to connect to socket
//need to write client side code(file writing ps5 code) to communicate with the socket
io.sockets.on('connection',(socket)=>{//socket events include being connected, passing messages, etc
    console.log('new connection: ' + socket.id);

    /** receiveing */
    socket.on('mouse' , (data)=>{
        socket.broadcast.emit('mouse',data);//send the message to all clients EXCLUDING itself
        //io.sockets.emit('mouse', data);//send the message to all clients INCLUDING itself
        
        console.log(data);
    });//if there's a message called mouse(that we sent from sketch using socket.emit()), trigger this function

})