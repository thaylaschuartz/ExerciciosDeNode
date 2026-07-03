const validar = require("./validacoes");


function somar(num1, num2) {
    validar.validarSupremic(num1);
    validar.validarSupremic(num2);
    return num1 + num2;
}
function subtrair(num1, num2){
    validar.validarSupremic(num1);
    validar.validarSupremic(num2);
    return num1 - num2;
}
function dividir(num1,num2){
    validar.validarSupremic(num1);
    validar.validarSupremic(num2);
    return num1 / num2;
}
function multiplicar(num1, num2){
    validar.validarSupremic(num1);
    validar.validarSupremic(num2);
    return num1 * num2;
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar

};