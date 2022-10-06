/*CALCULADORA DE IMC
    - Abaixo de 17 muito abaixo do peso.
    - Entre 17 e 18,49 abaixo do peso.
    - Entre 18,5 e 24,99 peso normal.
    - Entre 25 e 29,99 acima do peso.
FORMULA DO IMC
    - Peso / (altura * altura).
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;

  imc = peso / (altura * altura);

  resultado = document.getElementById('mensagem');

  if (imc < 17) {
    resultado.innerHTML = "<br> Seu calculo foi: " + imc.toFixed(2) + ' massa.' + "<br/> Cuidado você está muito abaixo do peso ideal!"
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = "<br> Seu calculo foi: " + imc.toFixed(2) + ' massa.' + "<br/> Você está abaixo do peso ideal!"
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = "<br> Seu calculo foi: " + imc.toFixed(2) + ' massa.' + "<br/> Muito bom você está no peso ideal!"
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML = "<br> Seu calculo foi: " + imc.toFixed(2) + ' massa.' + "<br/> Cuidado, você está acima do peso ideal!"
  } else if (imc <= 30) {
    resultado.innerHTML = "<br> Seu calculo foi: " + imc.toFixed(2) + ' massa.' + "<br/> Atenção você está com Obesidade!"
  }
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}
