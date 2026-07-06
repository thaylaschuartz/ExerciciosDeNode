
    function validarSupremic(num1, num2) {

       if (typeof num1 === "number" && typeof num2 === "number"){
             console.log("Número válido.");
            return true;
        } else {
            console.log("Inválido esse numero ai");
            return false;
        }
    

    }

    
module.exports = {
validarSupremic
};

   