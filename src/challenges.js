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
function highestCount(array) {
  let maior = array[0];
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      contador += 1;
    }
  }
  return contador;
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
const encode = (frase) => {
  let frase2 = [];
  for (let i in frase) {
    if (frase[i] == 'a') {
      frase2.push(1);
    } else if (frase[i] == 'e') {
      frase2.push(2);
    } else if (frase[i] == 'i') {
      frase2.push(3);
    } else if (frase[i] == 'o') {
      frase2.push(4);
    } else if (frase[i] == 'u') {
      frase2.push(5);
    } else {
      frase2.push(frase[i]);
    }
  }
  return frase2.join('');
};

const decode = (frase) => {
  let frase2 = [];
  for (let i in frase) {
    if (frase[i] == 1) {
      frase2.push('a');
    } else if (frase[i] == 2) {
      frase2.push('e');
    } else if (frase[i] == 3) {
      frase2.push('i');
    } else if (frase[i] == 4) {
      frase2.push('o');
    } else if (frase[i] == 5) {
      frase2.push('u');
    } else {
      frase2.push(frase[i]);
    }
  }
  return frase2.join('');
};

// Desafio 10
function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let tecnologia = tecnologias.sort();

  for (let index = 0; index < tecnologias.length; index += 1) {
    array.push({
      tech: tecnologia[index],
      name: nome,
    });
  }
  return array;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'))
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
