const http = require("http");
const getCharById = require("./controllers/getCharById")

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').pop();
        return getCharById(res, id);
    }
})
server.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

