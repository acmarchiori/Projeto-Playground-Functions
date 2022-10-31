// Desafio 11
function generatePhoneNumber(telefone) {
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } 
  for (let i = 0; i < telefone.length; i += 1) {
      let repetido = 0;
      for (let index = 0; index < telefone.length; index += 1) {
        if (telefone[i] == telefone[index]) {
          repetido += 1;
        }
      }

      if (telefone[i] < 0 || telefone[i] > 9 || repetido >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }  
    return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
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
  for(let i = 0; i < array.length; i += 1) {
    soma = soma + parseInt(array[i]);
  }
  if(soma === 1) {
    return `1 copo de água`
  }
  return `${soma} copos de água`;
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
