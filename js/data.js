let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(e) {
  console.log("Connection established");
};

socket.onmessage = function(event) {
  var flData = JSON.parse(event.data);
  document.getElementById("result").innerHTML = "-----Tail-test.txt-------";
  flData.map((val)=>{
    var para = document.createElement("p");
    var node = document.createTextNode(""+val);
    para.appendChild(node);
    var element = document.getElementById("result");
    element.appendChild(para);
  })
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('Connection died');
  }
};

socket.onerror = function(error) {
  console.log(`[error] ${error.message}`);
};
