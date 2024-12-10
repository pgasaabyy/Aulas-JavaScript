/////// Funções Fácil

//1 (Crie uma função chamada saudacao que receba um nome como parâmetro e retorne uma mensagem de saudação personalizada.)

function saudacao(nome) {  
    return `Olá, ${nome}! Bem-vindo(a)!`;  
}  

const nomeEscolhido = 'Cherry';  
console.log(saudacao(nomeEscolhido));

//2 (Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.)

let x1 = 7
let x2 = 3
let resultado = (x1 + x2);

function somaDoisNúmeros() {
    console.log(`a soma de ${x1} e ${x2} é igual a ${resultado}`)
}

somaDoisNúmeros()


//3 (Crie uma função chamada parOuImpar que receba um número como parâmetro e retorne "Par" se o número for par e "Ímpar" se for ímpar.)

let number = 10;

function ImparPar() {
    if (number % 2 === 0) {
        console.log(`${number} é par`);
    } else {
        console.log(`${number} é ímpar`);
    }
}

ImparPar();



//4 (Crie uma função chamada multiplica que receba dois números e retorne o produto deles.)

let n1 = 9;
let n2 = 3;
let resMultiplica = n1 * n2;

function multDoisNúmeros() {
    console.log(`A multiplicação de ${n1} e ${n2} é igual a ${resMultiplica}`);
}

multDoisNúmeros();



//5 (Crie uma função chamada celsiusParaFahrenheit que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é F=C×1.8+32F = C \times 1.8 + 32F=C×1.8+32.)

let celsius = 20;

function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

let fahrenheit = celsiusParaFahrenheit(celsius);

console.log(fahrenheit);


//6 (Crie uma função chamada calculaMedia que receba três números e retorne a média deles.)

let media1 = 8;
let media2 = 0;
let media3 = 10;

function calculaMedia() {
    return (media1 + media2 + media3) / 3
}

console.log(calculaMedia())


//7 (Crie uma função chamada minutosParaSegundos que receba a quantidade de minutos e retorne o equivalente em segundos.)

let minutos = 15;

function minutosParaSegundos() {
    return minutos * 60;
}

console.log(`${minutos} minuto(s) convertido(s) em segundos é igual a ${minutosParaSegundos()} segundos. `)


//8 ( Crie uma função chamada ehPositivo que receba um número e retorne true se for positivo e false se for negativo ou zero.)

let nP = -4;

function ehPositivo() {
    if (nP > 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

ehPositivo(); 


//9 ( Crie uma função chamada repetePalavra que receba uma palavra e um número como parâmetros, e retorne a palavra repetida esse número de vezes.)

let palavra = 'cherry';  
let numero = 10;  

function repetePalavra(palavra, numero) {  
    return palavra.repeat(numero);  
}  

const result = repetePalavra(palavra, numero);  
console.log(result);



//10 (Crie uma função chamada calculaAreaRetangulo que receba a base e a altura de um retângulo e retorne sua área.)
let base = 5
let altura = 5
let area = calculaAreaRetangulo(base, altura)

function calculaAreaRetangulo (base, altura) {
    return base * altura
}

console.log (`a área do retângulo é ${area}`)


/////// Funções Médio

//1(Crie uma função chamada verificaPalindromo que receba uma string e retorne true se a palavra for um palíndromo (ou seja, lida da mesma forma de trás para frente) e false caso contrário.)

function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string === stringInvertida;
}
console.log(verificaPalindromo("arara")); 
console.log(verificaPalindromo("banana")); 

//2(Crie uma função chamada fatorial que receba um número inteiro e retorne o fatorial desse número. O fatorial de um número nnn é o produto de todos os números inteiros positivos menores ou iguais a nnn.)

function fatorial(n) {
    if (n < 0) return undefined; // O fatorial não é definido para números negativos
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); 
console.log(fatorial(0)); 

//3(Crie uma função chamada filtraPares que receba um array de números e retorne um novo array apenas com os números pares.)

function filtraPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(filtraPares(numeros));


//4(Crie uma função chamada contaVogais que receba uma string e retorne o número de vogais presentes na string.)

function contaVogais(string) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let char of string) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

console.log(contaVogais("Hello World")); 
console.log(contaVogais("JavaScript")); 

//5(Crie uma função chamada ordenaStrings que receba um array de strings e retorne um novo array com as strings em ordem alfabética.)

function ordenaStrings(array) {
    return array.slice().sort();
}
const palavraO = ["morango", "laranja", "uva", "kiwi", "banana"];
console.log(ordenaStrings(palavraO));


//6(Um editor de texto deseja contar quantas vezes uma palavra específica aparece em um parágrafo. Crie uma função chamada contaOcorrencias que receba uma palavra e um texto, e retorne o número de vezes que a palavra aparece no texto.)

function contaOcorrencias(palavra, texto) {
    return texto.split(palavra).length - 1;
}
const texto = "O carro azul bateu no carro vermelho";
console.log(contaOcorrencias("carro", texto));


//7(Em uma lista de nomes, você quer encontrar o primeiro nome que começa com uma letra específica. Crie uma função chamada encontraNome que receba uma letra e um array de nomes, e retorne o primeiro nome que começa com essa letra.)

function contaOcorrencias(palavra, texto) {
    return texto.split(palavra).length - 1;
}
const textoC = "O carro azul bateu no carro vermelho";
console.log(contaOcorrencias("carro", textoC));

//8(Em uma pesquisa, você deseja calcular a média de idades dos participantes. Crie uma função chamada mediaIdades que receba um array de idades e retorne a média dessas idades.)

function mediaIdades(idades) {
    const soma = idades.reduce((total, idade) => total + idade, 0);
    return soma / idades.length;
}
const idades = [15, 20, 45, 30, 20];
console.log(mediaIdades(idades));


//9(Em uma lista de itens de compras, existem itens repetidos. Crie uma função chamada removeDuplicatas que receba um array de itens e retorne um novo array sem itens duplicados.)

function removeDuplicatas(itens) {
    return Array.from(new Set(itens));
}
const itens = ["peixe", "chocolate", "macarrao", "chocolate", "macarrao"];
console.log(removeDuplicatas(itens));


//10(Uma loja online deseja ordenar uma lista de produtos por preço. Crie uma função chamada ordenaPorPreco que receba um array de objetos de produtos e retorne o array ordenado pelo preço.)

function ordenaPorPreco(produtos) {
    return produtos.slice().sort((a, b) => a.preco - b.preco);
}
const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 25 }
];
console.log(ordenaPorPreco(produtos));


//////////////////////////////////////////////////////////////////////////////

