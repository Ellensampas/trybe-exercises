const a = 100;
const b = 40;
const c = 40;

const somaDosAngulos = a + b +c;

let resultado;

if(somaDosAngulos === 180) {
  resultado = true
}  else if (somaDosAngulos > 180 || somaDosAngulos < 180) {
  resultado = false
} else {
  resultado = 'erro'
}

console.log(resultado);