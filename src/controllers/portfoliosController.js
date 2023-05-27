const  portfoliosRepository  = require('../repositories/portfoliosRepository');

exports.gerAllPortfolios = async (req, res) => {
    const projeto = await portfoliosRepository.getAllPortfolios();
    res.json(projeto);
};

exports.getProjetoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = await portfoliosRepository.getProjetoById(id);
    res.json(projeto)
};

exports.createProjeto = async (req, res) => {
    const projeto = req.body;
    const newProjeto = await portfoliosRepository.createProjeto(projeto);
    res.json(newProjeto);
};

exports.updateProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = req.body;
    const updateProjeto = await portfoliosRepository.updateProjeto(id, projeto);
    res.json(updateProjeto);
};

exports.deleteProeto = async (req, res) => {
    const id = (req.params.id);
    await portfoliosRepository.deleteProjeto(id);
    res.json({message: `Projeto ${id} deletado com sucesso!`});
};