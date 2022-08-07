//iniciando a classe validação
class Validator{
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }


    //validação incialk de todos os campos
    validate(form){

        

        //pegar os inputs-no caso isso é um HTML Collection
        let inputs = form.getElementsByTagName('input')

        console.log(`ola`, inputs[0])
        

        //Transformar um HTML Collection em um Array
        let inputsArray = [...inputs]

        console.log(`ola2`, inputsArray[0])

        console.log(`ae`,inputsArray[0].textContent)

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