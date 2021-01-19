const staticServer = require('node-static');
const http = require('http');
const fs = require('fs');

const file = new(staticServer.Server)(__dirname);

http.createServer(function (req, res) {
    req.addListener('end', function(){
        file.serve(req, res, function(err, result){
            if(err){
                if(err.status === 404){
                    fs.readFile(__dirname + '/404.html', (error, data)=>{
                        res.writeHead(404);
                        res.end(data);
                        console.log(res);
                        return
                    });
                }
                else{
                    console.error("Error serving " + req.url + " - " + err.message);
 
                    // Respond to the client
                    res.writeHead(err.status, err.headers);
                    res.end();
                }
            }
        })
    }).resume();
}).listen(8080, ()=>{
    console.log("App up and running at port 8080!");
});