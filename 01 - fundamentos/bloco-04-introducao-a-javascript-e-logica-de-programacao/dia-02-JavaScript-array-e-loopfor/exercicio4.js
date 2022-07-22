let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for(let index = 0; index < numbers.length; index += 1){
  resultado = resultado + numbers[index] / 10;
}
if(resultado >= 20){
  resultado = "valor maior que 20"
}
else{
  resultado = "valor menor ou igual a 20"
}
  console.log(resultado);