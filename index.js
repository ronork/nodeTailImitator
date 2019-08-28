 
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
var res='',count='';//results
var fs = require('fs');
process.argv[2]?count=Number(process.argv[2]):count=10;
const getFileData = ()=>{
let n = count,res=[];
var testData = fs.readFileSync('test.txt', 'utf8').split('\n');
while(n>=0 && testData.length>0){
res.push(testData.pop());
n--;
}
return res;
}
wss.on('connection', ws => {
let res = [];
res = getFileData();
ws.send(JSON.stringify(res));
fs.watchFile('test.txt',{interval:500}, (curr, prev) => {
res = getFileData();
ws.send(JSON.stringify(res));
});
});
