// Desafio 1
function compareTrue(girafa, elefante) {
  if (girafa && elefante === true) {
    return true;
  }
  return false;
}

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
function concatName(frase) {
  return (`${frase[frase.length - 1]}, ${frase[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoPega = ' ';
  const positionCat1 = Math.abs(mouse - cat1);
  const positionCat2 = Math.abs(mouse - cat2);
  (positionCat1 > positionCat2) ? gatoPega = 'cat2' : gatoPega = 'cat1';
  if (positionCat1 === positionCat2) {
    gatoPega = 'os gatos trombam e o rato foge';
  }
  return gatoPega;
}
console.log(catAndMouse(5, 3, 2));

// Desafio 8
function fizzBuzz(array) {
  let arrayStr = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayStr.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayStr.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayStr.push('fizz');
    } else {
      arrayStr.push('bug!');
    }
  }
  return arrayStr;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
