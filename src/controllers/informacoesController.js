const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes();
    res.json(informacoes);
};

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newInformacoes = await informacoesRepository.createInformacoes(informacoes);
    res.json(newInformacoes);
};

exports.deleteInformacoes = async (req, res) => {
    const id = (req.params.id);
    await informacoesRepository.deleteInformacoes(id);
    res.json({message: `Informacoes deletadas com sucesso!`});
};