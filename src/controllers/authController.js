const usuariosRepository = require('../repositories/usuariosRepository');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const usuario = await usuariosRepository.getUsuarioByEmail(email);

    if(!usuario || usuario.password !== password){
        return res.status(401).json({message: 'email ou senha inválidos'});
    }else{
        return res.status(200).json({message: 'Login realizado com sucesso!'})
    }
};