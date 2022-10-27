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
const splitSentence = frase => frase.split(' ');

// Desafio 4
function concatName(frase) {
  return (`${frase[frase.length-1]}, ${frase[0]}`);
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
  if ((mouse - cat1) < (mouse - cat2)){
    return 'cat1';
}
else if ((mouse - cat1) > (mouse - cat2)) {
    return 'cat2';
}
else if ((mouse - cat1) == (mouse - cat2)) {}
    return 'os gatos trombam e o rato foge.'; 
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
