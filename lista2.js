////////// Exercícios JavaScript



//1 (Variáveis e Operadores)

const preco = 100;

const valorDesconto = preco * 0.20;
const valorFinal = preco - valorDesconto;

console.log(`O valor com o desconto é de ${valorFinal}`);


//2 (Concatenando Strings)

let frase1 = "cherry";

let fraseUnida = frase1.concat(' lady');

console.log(fraseUnida);


//3 (Arrays)

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}


//4 (Manipulação de Arrays)

let frutas1 = ["maça", "banana", "laranja"]
frutas1.push("uva")
console.log(frutas1)


//5 (Objetos)

const pessoa = { 
    nome: 'Ana', 
    idade: 10, 
    cidade: 'São Paulo' 
};

console.log (pessoa)


//6 (Manipulação de Objetos)

const pessoa2 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    email: "joao@teste.com"
  };
  
  console.log(pessoa2);
  

//7 (Arrays e Métodos)

let array = [1, 2, 3, 4, 5];

let modifiedArray = array.map(function(element){
    return element *2;
});

console.log(modifiedArray); 


//8 (Filtrando Arrays)

let idades = [15, 22, 18, 30, 12];

let maioridade = idades.filter(function(element){
    return element >= 18;
});

console.log (maioridade)


//9 (Looping em Array)

let cores = ['vermelho', 'verde', 'azul'];

let consoleColors = cores.forEach(function(cor){
    console.log (cor);
})


//10 (Objetos Aninhados)

const carro = {
    marca: 'Ferrari',
    modelo: 'LaFerrari',
    especificações: {
        ano: 2018,
        cor: 'vermelha'
    }
};

console.log(carro.especificações);


//11 (Destruturação de Objetos)

let usuarioD = { nome: 'João', idade: 30 };

let { nome, idade } = usuarioD;

console.log(nome);   
console.log(idade);


//12 (Contagem de elementos em uma array)

const animais = ['cachorro', 'gato', 'pássaro', 'gato'];

const quantidadeGatos = animais.filter(animal => animal === 'gato').length;

console.log(quantidadeGatos);


//13 (Operador Ternário)

const nota = 10;

if(nota >= 7){
    console.log('Aprovado');
}

else{
    console.log('Reprovado');
}


//14 (TRansformando Strings)

const hello = 'Hello World!';

const HelloMin = hello.toLowerCase();

console.log(HelloMin);


//15 (União de Arrays)

const arrayN1 = [1, 2, 3];
const arrayN2 = [ 4, 5, 6];

const uniãoA = arrayN1.concat(arrayN2);

console.log(uniãoA);


//16 (Removendo elementos de uma array)

const decimais = [10, 20, 30, 40];

decimais.shift();

console.log(decimais);


//17 (Verificação de propriedades de objetos)

const produto = { nome: 'Notebook', preco: 2500 };

if ('preco' in produto) {
  console.log('A propriedade "preco" existe no objeto produto.');
} 

else {
  console.log('A propriedade "preco" não existe no objeto produto.');
}


//18 (Iterando com FOR)

const somaN = [1, 3, 5, 7];
let soma = 0;
for (let i = 0; i < somaN.length; i++) {
    soma += somaN[i];
}

console.log(soma);


//19 (Clonando objetos)

const usuario2 = { nome: 'Maria', idade: 25 };
const cidade = 'São Paulo';
const addCity = Object.assign({}, usuario2, { cidade });

console.log(addCity);


//20 (Manipulação de arrays com REDUCE)
const numerosR = [1, 2, 3, 4];
const produtoR = numerosR.reduce((acc, num) => acc * num, 1);

console.log(produto);




//////////////////////////////////////////////////////////////////////////////////////