import http from "http"
const server =  http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello world");
})

server.listen((3004,() => {
console.log("server running...");
}));