let usuarios = []; 
console.log("==> CADASTRO DE USUÁRIOS:");

function criarUsuario(nome, idade) {
    let novoUsuario = { 
        nome: nome, 
        idade: idade 
    };
    
    usuarios.push(novoUsuario); 
    console.log(`Usuário ${nome} cadastrado com sucesso!`);
}

function listarUsuarios() {
    console.log("==> LISTA DE USUÁRIOS:");
    
    for (let usuario of usuarios) {
        console.log(`Nome: ${usuario.nome} | Idade: ${usuario.idade}`);
    }
}
module.exports = {
    criarUsuario,
    listarUsuarios
};
