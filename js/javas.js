//iniciando a classe validação
class Validator{
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }


    //validação incialk de todos os campos
    validate(form){
        //pegar os inputs
        let inputs = form.getElementsByTagName('input')

        //Transformar um HTML Collection em um Array
        let inputsArray = [...inputs]

        //loop de inputs e validação para cada um deles
        inputsArray.forEach(function(input){
            for(let i =0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i]) != null){
                    console.log('achou validação')
                }
            }
        }, this);
    }
}
//recebdendo os querys
let form = document.querySelector('#register')
let submit = document.querySelector('#btn-submit')
let validator = new Validator();








submit.addEventListener('click', function(e){


    validator.validate(form);


    e.preventDefault();

})