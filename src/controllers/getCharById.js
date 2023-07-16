const axios = require("axios");

function getCharById(res, id){
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response =>{
        const {id, name, gender, species, origin, image, status}=response.data;
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        return res.end(JSON.stringify(character));
    })
    .catch(error => {
        res.writeHead(500, {"Content-Type": "text/plain"});
        console.log(error)
        res.status(500).contentType('text/plain').send(error.message);

        // res.end(new Error(error))
    })
}

module.exports = getCharById

