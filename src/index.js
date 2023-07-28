const http = require("http");
const getCharById = require("./controllers/getCharById")
const { conn } = require('./DB_connection');

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').pop();
        return getCharById(res, id);
    }
})
// Sincroniza Sequelize con la base de datos antes de levantar el servidor
conn.sync()
  .then(() => {
    server.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('Error synchronizing Sequelize with the database:', error);
  });

