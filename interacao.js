const n1 = document.getElementById('campo1');
const n2 = document.getElementById('campo2');
const calcular = document.getElementById('clc');
const result = document.getElementById('resultado');

if(calcular){
    calcular.addEventListener('click', function(){
        const valor1S = n1.value;
        const valor2S = n2.value;

        const numero1 = Number(valor1S);
        const numero2 = Number(valor2S);

        if(isNaN(numero1) || isNaN(numero2)){
            result.textContent = "Digite números válidos!"
            return;
        }
        const soma = numero1 + numero2;
        console.log("Resultado: ", soma);
        result.textContent = "Resultado: " + soma;
    });
}