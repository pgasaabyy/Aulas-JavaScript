//////// Exercício FOR


// Exercício 1: Exibição de Lista de Alunos
let alunos = ['Alice', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
console.log('Lista de Alunos:');
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

// Exercício 2: Tabuada de Multiplicação
let numero = parseInt(prompt('Digite um número para ver a tabuada: '));
if (!isNaN(numero)) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log('Por favor, digite um número válido.');
}

// Exercício 3: Calculadora de Média de Notas
let notas = [];
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas[i] = nota;
    } else {
        console.log('Por favor, digite uma nota válida (entre 0 e 10).');
        i--; // Decrementa o índice para repetir a entrada
    }
}
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length;
console.log(`A média das notas é: ${media.toFixed(2)}`);

// Exercício 4: Sistema de Contagem Regressiva
console.log('Contagem Regressiva:');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Exercício 5: Verificação de Número Par
console.log('Números pares de 1 a 20:');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercício 6: Lista de Materiais
let materiais = ['Caderno', 'Caneta', 'Lápis', 'Boracha', 'Régua'];
console.log('Lista de Materiais:');
for (let i = 0; i < materiais.length; i++) {
    console.log(materiais[i]);
}

// Exercício 7: Soma dos Números de 1 a N
let N1 = parseInt(prompt('Digite um número N: '));
if (!isNaN(N1) && N1 > 0) {
    let somaN = 0;
    for (let i = 1; i <= N1; i++) {
        somaN += i;
    }
    console.log(`A soma dos números de 1 a ${N1} é: ${somaN}`);
} else {
    console.log('Por favor, digite um número válido maior que 0.');
}

// Exercício 8: Fatorial de um Número
let numeroFatorial = parseInt(prompt('Digite um número para calcular o fatorial: '));
if (!isNaN(numeroFatorial) && numeroFatorial >= 0) {
    let fatorial = 1;
    for (let i = 1; i <= numeroFatorial; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);
} else {
    console.log('Por favor, digite um número válido e não negativo.');
}

// Exercício 9: Contagem de Vogais em uma Palavra
let palavra = prompt('Digite uma palavra: ');
let contagemVogais = 0;
for (let i = 0; i < palavra.length; i++) {
    if ('aeiouAEIOU'.includes(palavra[i])) {
        contagemVogais++;
    }
}
console.log(`A palavra "${palavra}" tem ${contagemVogais} vogais.`);

// Exercício 10: Multiplicação de Array
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    if (!isNaN(numero)) {
        numeros[i] = numero;
    } else {
        console.log('Por favor, digite um número válido.');
        i--; // Decrementa o índice para repetir a entrada
    }
}
console.log('Números multiplicados por 2:');
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
}

// Exercício 11: Inversão de String
let string = prompt('Digite uma palavra: ');
let stringInvertida = '';
for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}
console.log(`A palavra "${string}" invertida é: "${stringInvertida}"`);

// Exercício 12: Soma de Números Pares em um Intervalo
let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let somaPares = 0;
if (!isNaN(num1) && !isNaN(num2)) {
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 === 0) {
            somaPares += i;
        }
    }
    console.log(`A soma dos números pares entre ${num1} e ${num2} é: ${somaPares}`);
} else {
    console.log('Por favor, digite números válidos.');
}

// Exercício 13: Contagem de Caracteres em uma Frase
let frase = prompt('Digite uma frase: ');
let contagemCaracteres = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== ' ') { // Ignora espaços
        contagemCaracteres++;
    }
}
console.log(`A frase "${frase}" tem ${contagemCaracteres} caracteres (sem contar espaços).`);

// Exercício 14: Lista de Meses do Ano
let meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 
    'Maio', 'Junho', 'Julho', 'Agosto', 
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
console.log('Meses do Ano:');
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

// Exercício 15: Cálculo de Potências
let numeroPotencia = parseInt(prompt('Digite um número para calcular suas potências de 1 a 5: '));
if (!isNaN(numeroPotencia)) {
    console.log(`Potências de ${numeroPotencia}:`);
    for (let i = 1; i <= 5; i++) {
        console.log(`${numeroPotencia}^${i} = ${Math.pow(numeroPotencia, i)}`);
    }
} else {
    console.log('Por favor, digite um número válido.');
}

// Exercício 16: Criação de um Array de Quadrados
let N = parseInt(prompt('Digite um número N para criar um array de quadrados: '));
if (!isNaN(N) && N > 0) {
    let quadrados = [];
    for (let i = 1; i <= N; i++) {
        quadrados.push(i * i);
    }
    console.log(`Array de quadrados de 1 a ${N}: ${quadrados}`);
} else {
    console.log('Por favor, digite um número válido e positivo.');
}

// Exercício 17: Impressão de Padrão de Asteriscos
let linhas = parseInt(prompt('Digite o número de linhas para o padrão de asteriscos: '));
if (!isNaN(linhas) && linhas > 0) {
    for (let i = 1; i <= linhas; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += '*';
        }
        console.log(linha);
    }
} else {
    console.log('Por favor, digite um número válido e positivo.');
}

// Exercício 18: Calculadora de Média Ponderada
let notasPonderadas = [];
let pesos = [];
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    if (!isNaN(nota)) {
        notasPonderadas[i] = nota;
    } else {
        console.log('Por favor, digite uma nota válida.');
        i--; // Decrementa o índice para repetir a entrada
    }

    let peso = parseFloat(prompt(`Digite o peso da nota ${i + 1}: `));
    if (!isNaN(peso) && peso > 0) {
        pesos[i] = peso;
    } else {
        console.log('Por favor, digite um peso válido e positivo.');
        i--; // Decrementa o índice para repetir a entrada
    }
}

let somaNotas = 0;
let somaPesos = 0;
for (let i = 0; i < 3; i++) {
    somaNotas += notasPonderadas[i] * pesos[i];
    somaPesos += pesos[i];
}

let mediaPonderada = somaNotas / somaPesos;
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);


////////////////////////////////////////////////////////////////