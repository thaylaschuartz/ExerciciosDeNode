function validarNome(nome){

    if(nome.length < 3 ){
        console.log("Quantidade de letras insuficientes");
    }else if(nome.length >= 3){
        console.log("Nome:",nome);
    }
    else{
        console.log("Erro fatal");
    }
}
function validarIdade(idade){
    if(idade < 0){
        console.log("Idade Inválida, num podi ser negativa");
    }else if(idade >= 1){
        console.log("Idade:",idade);
    }  else{
        console.log("Erro fatal");
    }
}
module.exports = {
    validarNome,
    validarIdade
};