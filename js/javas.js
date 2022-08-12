//recebdendo os querys
let form = document.querySelector('#register')
let submit = document.querySelector('#btn-submit')




//iniciando a classe validação
class Validator{
    constructor(){
        this.validations = [
            'data-min-length',
            'data-max-length',
        ]
    }


    //validação incial de todos os campos
    validate(form){

        
        //resgata validações
        let currentValidations = document.querySelectorAll('form .class-error')

        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        }


        //pegar os inputs-no caso isso é um HTML Collection
        let inputs = form.getElementsByTagName('input')
        

        //Transformar um HTML Collection em um Array
        let inputsArray = [...inputs]

        console.log(`ae`,inputsArray[0].textContent)

        //loop de inputs e validação para cada um deles
        inputsArray.forEach(function(input){
            for(let i =0; this.validations.length > i; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){

                    console.log(input.getAttribute(this.validations[i]))
                    //limpa a string para virar um metodo
                    let method = this.validations[i].replace('data-','').replace('-','');
                    //valor input
                    let valor = input.getAttribute(this.validations[i]);
                    //chama o metodo
                    this[method](input, valor);
                }
            }
        }, this);

        
    }
    //verifica se tem o num minimo de caracteres no campo
    minlength(input, minValor){

        let inputLength = input.value.length;

        let errorMessage = `O Campo precisa ter pelo menos ${minValor}`;

        if(inputLength < minValor){
            this.mostrarMensagem(input, errorMessage)
        }

    }

    maxlength(input, maxValor){
        let inputLength = input.value.length;

        let errorMessage = `O Campo precisa ser menor que ${maxValor}`

        if(inputLength > maxValor){
            this.mostrarMensagem(input, errorMessage)
        }
    }

    //metodo para imprimir a mensagemd e erro
    mostrarMensagem(input, msg){
        
        let template = document.querySelector('.class-error').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template)


    }

    //limpar validações da tela
    cleanValidations(validations){
        validations.forEach(el => el.remove())
    }


}




let validator = new Validator();



submit.addEventListener('click', function(e){


    validator.validate(form);


    e.preventDefault();

})