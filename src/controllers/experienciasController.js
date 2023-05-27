const experienciasRepository = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res) => {
    const experiencias = await experienciasRepository.getAllExperiencias();
    res.json(experiencias);
};

exports.getExperienciasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencias = await experienciasRepository.getExperienciasById(id);
    res.json(experiencias);
};