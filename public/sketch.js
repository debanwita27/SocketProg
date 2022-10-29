var socket;

function setup() {
  createCanvas(600, 600);
  background(51);

  //make client side connection to socket
  socket = io.connect('http://localhost:5001')

  //if message called mouse is received that some other client emitted, draw it too
  socket.on('mouse',(data)=>{
  noStroke();
  fill(255, 0 ,100);
  ellipse(data.x,data.y,20,20);
  })
}

function mouseDragged(){
  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
    x : mouseX,
    y : mouseY
  }
  /** Sending */
  socket.emit('mouse' , data);//need a name to identify and data to send

  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,20,20);
}

function draw() {
  
}
