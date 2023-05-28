const experienciasRepository = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res) => {
    const tipo = req.query.tipo;
    const experiencia = await experienciasRepository.getAllExperiencias(tipo);
    res.json(experiencia);
};

exports.getExperienciasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = await experienciasRepository.getExperienciasById(id);
    res.json(experiencia);
};

exports.createExperiencias = async (req, res) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepository.createExperiencias(experiencia)
    res.json(newExperiencia);
};

exports.updateExperiencias = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updateExperiencia = await experienciasRepository.updateExperiencias(id, experiencia);
    res.json(updateExperiencia)
};

exports.deleteExperiencias = async (req, res) => {
    const id = (req.params.id);
    await experienciasRepository.deleteExperiencias(id);
    res.json({message: `Experiencia ${id} deletada com sucesso!`});
};