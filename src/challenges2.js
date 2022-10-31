// Desafio 11
function generatePhoneNumber(tel) {
  if (tel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < tel.length; i += 1) {
    let repetido = 0;
    for (let index = 0; index < tel.length; index += 1) {
      if (tel[i] === tel[index]) {
        repetido += 1;
      }
    }

    if (tel[i] < 0 || tel[i] > 9 || repetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${tel[0]}${tel[1]}) ${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    return true;
  }
  else if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 13
function hydrate(bebidas) {
  let numeros = /\d+/g;
  let array = bebidas.match(numeros);
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    soma += parseInt(array[i]);
  }
  if (soma === 1) {
    return '1 copo de água';
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
