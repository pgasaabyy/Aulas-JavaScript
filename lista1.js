/////// Baixa Complexidade

//1 (Crie uma função que receba um número e retorne se ele é par ou ímpar usando o operador %.)
function imparPar (numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}
console.log(imparPar(7));


//2 (Faça uma função que verifique se uma pessoa é maior de idade (18 anos) com base no ano de nascimento fornecido.)
let anoNasc = 2009;
let anoAtual = 2024;
let IdadeFinal = anoAtual - anoNasc;

if (IdadeFinal > 18) {
    console.log('é maior de idade')
} else {
    console.log('não é maior de idade')
}


//3 (Desenvolva uma função que receba duas notas e, se a média for maior ou igual a 7, retorne "Aprovado", senão, retorne "Reprovado".)
function mediaNota (nota1, nota2){
    let media = ((nota1 + nota2) / 2)

    if (media >= 7){
        return 'Aprovado'
    }
    else{
        return 'Reprovado'
    }
}

console.log (mediaNota (10,8))


//4 (Escreva uma função que receba a idade de uma pessoa e retorne se ela pode votar (idade ≥ 16).)
let Voto = 19 
      if (Voto >= 16) {
       console.log ("Permitido Votar") 
    }
    else {
        console.log("Não Permitido Votar") 
    }


//5 (Crie uma função que receba dois números e retorne o maior deles. Utilize o operador ternário.)
function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(7,8));


//6 (Escreva uma função que, com base na quantidade de horas trabalhadas, calcule se a pessoa fez hora extra (mais de 40 horas).)
function verHorasTrab (horasTrab){
    if (horasTrab > 40){
        return 'Fez horas Extras'
    }
    else {
        return 'Não fez horas extras'
    }
}

console.log (verHorasTrab(28))


//7 (Crie um código que receba um número e verifique se ele está dentro do intervalo entre 10 e 50.)
function nEntreCemeDez (numero){
     if (numero >= 10 && numero <=50){
        return ' Esse número esta entre 10 e 50'
     }
     else {
        return 'Esse número não esta entre 10 e 50'
     }
}
console.log(nEntreCemeDez(3))


//8 (Desenvolva um script que determine se uma letra é uma vogal ou consoante.)
function verificarVogalOuConsoante(letra) {
    letra = letra.toLowerCase();
    return "aeiou".includes(letra) ? `${letra} é uma vogal` : `${letra} é uma consoante`;
}
console.log(verificarVogalOuConsoante("i"));


//9 (Faça uma função que receba o nome de um mês e verifique se é um mês de férias (dezembro, janeiro ou julho).)
function verificarFérias (mês){
    mês = mês.toLowerCase();
    return "dezembro, janeiro, julho".includes(mês) ? `${mês} é um mês de férias` : `${mês} não é um mês de férias`
    }
console.log(verificarFérias("março"))


//10 (Crie uma função que receba a nota de um aluno e retorne "A", "B", "C", "D" ou "F", baseado em critérios de faixa de notas.)
function verificarNota (notaAluno) {
    if (notaAluno === 10) return 'A'
    if (notaAluno >= 8) return 'B'
    if (notaAluno >= 7) return 'C'
    if (notaAluno >= 5) return 'D'
    if (notaAluno <= 3) return 'F'
}

console.log(verificarNota(1))



/////// Média Complexidade

//1 (Crie uma função que receba três números e retorne o maior deles. Utilize condicionais if-else.)
let a = 7;
let b = 43;
let c = 9;

if ( a > b && a > c) {
    console.log(`${a} é o maior número `);
}
else if ( b > a && b > c){
    console.log(`${b} é o maior número`)
}
else {
 console.log(`${c} é o maior número`)
}

//2 (Escreva uma função que receba uma string e retorne se o primeiro caractere é uma letra maiúscula ou minúscula.)
let texto = "abacaxi";

if (texto.charAt(0) === texto.charAt(0).toUpperCase()) {
    console.log("A palavra começa com a letra maiúscula");
} else {
    console.log("A palavra começa com a letra minúscula");
}


//3 (Crie um código que, com base na temperatura fornecida, retorne se está frio (< 15ºC), moderado (entre 15ºC e 30ºC), ou quente (> 30ºC).)
let temperatura = 4;
if (temperatura < 15) {
    console.log("Frio");

} else if (temperatura === 15) { 
    console.log("Moderado");

} else {
    console.log("Quente");
}


//4 (Desenvolva uma função que receba o ano e retorne se é bissexto ou não.)
 let ano = 2023;
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log(bissexto);

//5 (Escreva uma função que receba dois números e verifique se ambos são divisíveis por 5.)
let num = 8;

if (num % 5 === 0) {
    console.log(`O número ${num} é divisível por 5`);
} else {
    console.log(`O número ${num} não é divisível por 5`);
}



//6 (Crie um código que simule um semáforo: ao receber a cor (verde, amarelo, vermelho), retorne uma ação (parar, esperar, seguir).)
let semáforo = "amarelo";

if (semáforo === "verde") {
    console.log("Pode seguir seu caminho");    
} else if (semáforo === "amarelo") {
    console.log("Tirar o pé do acelerador");
} else if (semáforo === "vermelho") {
    console.log("Permanece obrigatória a parada do veículo quando o sinal está vermelho");
}



//7 (Faça uma função que verifique se um número está na lista de números primos até 100.)
const numerosPrimos = (num) => {
    const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    return primos.includes(num);
};

const number = 17;
console.log(`${number} ${numerosPrimos(number) ? 'está' : 'não está'} na lista de números primos até 100.`);


//8 (Crie uma função que determine se um número é perfeito (a soma de seus divisores é igual a ele).)

/////// Alta Complexidade

/////// Baixa Complexidade Arrays
/////// Média Complexidade Arrays
/////// Alta Complexidade Arrays





/////// Baixa Complexidade Objetos
/////// Média Complexidade Objetos
/////// Alta Complexidade Objetos


