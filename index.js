function mayorQueUnNumero(numero) {
  return (numeroAComparar) => numeroAComparar > numero;
}

let mayorQueDiez = mayorQueUnNumero(10);

console.log(mayorQueDiez(20));
console.log(mayorQueDiez(5));

let mayorQueVeinte = mayorQueUnNumero(20);
console.log(mayorQueVeinte(22));
console.log(mayorQueVeinte(10));

const numeros = [5, 10, 7, 2];

function porCadaUno(arreglo, funcionAEjecutar) {
  for (const elemento of arreglo) {
    funcionAEjecutar(elemento);
  }
}

function imprimirValor(valor) {
  alert(valor);
}

porCadaUno(numeros, imprimirValor);

let total = 0;
function acumular(num) {
  total += num;
}

porCadaUno(numeros, acumular);
alert("El total es:" + total);

//Exponenciar cada nuemro en un array

const numArray = [2, 3, 4, 5, 12, 15];

const poweredArray = numArray.map((number) => {
  return number + number;
});

console.log(poweredArray);

// Resta
const numeroArray = [1, 2, 3, 4, 5];

const sum = numeroArray.reduce((total, num) => {
  return total + num;
});

console.log(sum);
