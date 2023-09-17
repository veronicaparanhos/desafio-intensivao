//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
const saudacao = "Hello World";

console.log(saudacao);

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const sum = (x, y) => {
  return x + y;
};

console.log(sum(2, 3));

//Crie um script que declare uma variável e verifique se o seu valor é um número.
//Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let num = 23;

if (typeof num === "number") {
  console.log("É um número");
} else {
  console.log("Não é um número");
}

// Crie um script que declare uma variável e verifique se o seu valor é uma string.
//Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let word = "Veronica";

if (typeof word === "string") {
  console.log("É uma string");
} else {
  console.log("Não é uma string");
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano.
//Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let logic = false;

if (typeof logic == "boolean") {
  console.log("É um booleano");
} else {
  console.log("Não é um booleano");
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = (x, y) => {
  return x - y;
};
console.log(sub(10, 2));

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const mult = (x, y) => {
  return x * y;
};
console.log(mult(6, 2));

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const div = (x, y) => {
  return x / y;
};
console.log(div(10, 2));

//Crie um script que declare uma variável e verifique se o seu valor é um número par.
//Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let even = 20;

if (even % 2 === 0) {
  console.log("É um número par");
} else {
  console.log("Não é um número par");
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
//Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let odd = 21;

if (odd % 2 !== 0) {
  console.log("É um número ímpar");
} else {
  console.log("Não é um número ímpar");
}
