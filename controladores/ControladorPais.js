//jshint esversion:6
const {Pais}=require(`../models`);
//retorna paises segun region
function filtrarPaisPorRegion(req, res){

    res.json({});
}
// Retorna paises filtrados por el atributo nombre
const filtrarPaisPorNombre = (request, response) => {

    response.json({});
}

const getPaises= async (request,response)=>{
    const paises = await Pais.findAll();
    if (paises === null) {
    console.log('No hay datos!');
    } 
    response.json({data:paises})
}
module.exports =  {
    filtrarPaisPorNombre,
    filtrarPaisPorRegion,
    getPaises
    // getPais
};