///// Exercícios DoWhile


const prompt = require('prompt-sync')();

// Exercício 1: Cadastro de Alunos
let alunoQuest = [];
let continuar;

do {
    let nome = prompt('Digite seu nome: ');
    let idade = prompt('Digite sua idade: ');

    alunoQuest.push({ nome: nome, idade: idade });
    continuar = prompt('Deseja cadastrar novo aluno? (s/n): ');

} while (continuar.toLowerCase() == 's');

console.log('Alunos cadastrados na lista:', alunoQuest);

// Exercício 2: Simulador de Notas
let notas = [];
let continuarAV;

do {
    let nota = parseFloat(prompt('Digite a nota: '));
    notas.push(nota);
    continuarAV = prompt('Deseja inserir outra nota? (s/n): ');
} while (continuarAV.toLowerCase() === 's');

let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log('Média das notas:', media);

// Exercício 3: Login de Usuário
let usuarioCorrect = 'cherry';
let senhaCorrect = 'cherry1234';

function loginUsuario() {
    let usuario;
    let senha;
    let continuar;

    do {
        usuario = prompt('Digite o nome de usuário: ');
        senha = prompt('Digite a senha: ');

        if (usuario === usuarioCorrect && senha === senhaCorrect) {
            console.log('Entrada permitida');
            break;
        } else {
            continuar = prompt('Informações incorretas, deseja verificar novamente? (s/n)').toLowerCase();
        }

    } while (continuar === 's');
}

loginUsuario();

// Exercício 4: Cálculo de Potência
let continuarp;

do {
    let numero = parseFloat(prompt('Digite o número: '));
    let expoente = parseFloat(prompt('Digite o expoente: '));

    let resultado = Math.pow(numero, expoente);
    console.log(`${numero} elevado a ${expoente} é igual a ${resultado}`);

    continuarp = prompt('Deseja calcular outra potência? (s/n): ');

} while (continuarp.toLowerCase() === 's');

// Exercício 5: Validação de Senha Forte
let senhaCarac;
let continuarCarac;

do {
    senhaCarac = prompt('Digite uma senha forte (mínimo de 8 caracteres, com letras e números): ');

    const senhaValida = senhaCarac.length >= 8 && /[a-zA-Z]/.test(senhaCarac) && /\d/.test(senhaCarac);

    if (senhaValida) {
        console.log('Senha forte! Acesso permitido.');
        break;
    } else {
        continuarCarac = prompt('Insira uma senha válida (mínimo de 8 caracteres, com letras e números): ');
    }

} while (!senhaValida);

// Exercício 6: Cálculo da Média de Notas
let alunoQuestNota = [];
let continuarNota;

do {
    let nome = prompt('Digite seu nome: ');
    let idade = prompt('Digite sua idade: ');
    let notas = [];
    let continuarNota;

    do {
        let nota = parseFloat(prompt('Digite uma nota: '));
        notas.push(nota);
        continuarNota = prompt('Deseja adicionar outra nota? (s/n): ').toLowerCase();
    } while (continuarNota === 's');

    let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    alunoQuestNota.push({ nome, idade, media });

    continuar = prompt('Deseja cadastrar novo aluno? (s/n): ').toLowerCase();

} while (continuar === 's');

console.log('Alunos cadastrados e suas médias:');
alunoQuestNota.forEach(aluno => {
    console.log(`${aluno.nome}, Idade: ${aluno.idade}, Média: ${aluno.media.toFixed(2)}`);
});

// Exercício 7: Jogo de Adivinhação
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;
let continuarAD;

do {
    palpite = parseInt(prompt('Adivinhe um número entre 1 e 10: '));
    if (palpite === numeroSecreto) {
        console.log('Parabéns! Você adivinhou o número!');
        break;
    } else {
        continuarAD = prompt('Tente novamente? (s/n): ');
    }
} while (continuarAD === 's');

// Exercício 8: Validação de Nome e Idade
let continuarNomeIdade;

do {
    let nome = prompt('Digite seu nome: ');
    let idade;

    do {
        idade = parseInt(prompt('Digite sua idade (entre 16 e 100): '));
    } while (idade < 16 || idade > 100);

    continuarNomeIdade = prompt('Deseja cadastrar outro aluno? (s/n): ');
} while (continuarNomeIdade === 's');

// Exercício 9: Cadastro de Produtos
let continuarProduto;

do {
    let produto = prompt('Digite o nome do produto: ');
    let quantidade = parseInt(prompt('Digite a quantidade em estoque: '));

    console.log(`Produto: ${produto}, Quantidade: ${quantidade}`);
    continuarProduto = prompt('Deseja cadastrar outro produto? (s/n): ');
} while (continuarProduto === 's');

// Exercício 10: Cálculo de Fatorial
let continuarFatorial;

do {
    let numero = parseInt(prompt('Digite um número inteiro positivo: '));
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`Fatorial de ${numero} é ${fatorial}`);
    continuarFatorial = prompt('Deseja calcular outro fatorial? (s/n): ');
} while (continuarFatorial === 's');

// Exercício 11: Simulação de Conta Bancária
let saldo = 0;
let continuarConta;

do {
    let operacao = prompt('Digite "d" para depósito ou "s" para saque: ').toLowerCase();
    let valor = parseFloat(prompt('Digite o valor: '));

    if (operacao === 'd') {
        saldo += valor;
        console.log(`Depósito realizado. Saldo atual: R$ ${saldo.toFixed(2)}`);
    } else if (operacao === 's') {
        if (valor > saldo) {
            console.log('Saldo insuficiente para saque.');
        } else {
            saldo -= valor;
            console.log(`Saque realizado. Saldo atual: R$ ${saldo.toFixed(2)}`);
        }
    }

    continuarConta = prompt('Deseja realizar outra operação? (s/n): ');
} while (continuarConta === 's');

// Exercício 12: Conversão de Temperatura
let continuarConversao;

do {
    let celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`);

    continuarConversao = prompt('Deseja realizar outra conversão? (s/n): ');
} while (continuarConversao === 's');

// Exercício 13: Soma de Compras
let totalCompras = 0;
let continuarCompras;

do {
    let valorProduto = parseFloat(prompt('Digite o valor do produto: '));
    totalCompras += valorProduto;

    continuarCompras = prompt('Deseja adicionar outro produto? (s/n): ');
} while (continuarCompras === 's');

console.log(`Valor total das compras: R$ ${totalCompras.toFixed(2)}`);

// Exercício 14: Cálculo de Juros Simples
let continuarJuros;

do {
    let capital = parseFloat(prompt('Digite o capital: '));
    let taxa = parseFloat(prompt('Digite a taxa de juros (em %): '));
    let tempo = parseFloat(prompt('Digite o tempo (em anos): '));

    let montante = capital * (1 + (taxa / 100) * tempo);
    console.log(`Valor final: R$ ${montante.toFixed(2)}`);

    continuarJuros = prompt('Deseja calcular outro valor? (s/n): ');
} while (continuarJuros === 's');

// Exercício 15: Pesquisa de Satisfação
let continuarPesquisa;
let totalNotas = 0;
let quantidadeNotas = 0;

do {
    let nota = parseInt(prompt('Digite uma nota de 1 a 5: '));
    totalNotas += nota;
    quantidadeNotas++;

    continuarPesquisa = prompt('Deseja adicionar outra nota? (s/n): ');
} while (continuarPesquisa === 's');

let mediaNotas = totalNotas / quantidadeNotas;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);

// Exercício 16: Cálculo de Média Ponderada
let continuarMediaPonderada;

do {
    let nota1 = parseFloat(prompt('Digite a primeira nota: '));
    let peso1 = parseFloat(prompt('Digite o peso da primeira nota: '));
    let nota2 = parseFloat(prompt('Digite a segunda nota: '));
    let peso2 = parseFloat(prompt('Digite o peso da segunda nota: '));
    
    let mediaPonderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
    console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);

    continuarMediaPonderada = prompt('Deseja calcular outra média ponderada? (s/n): ');
} while (continuarMediaPonderada === 's');

// Exercício 17: Contagem de Vogais
let continuarContagem;

do {
    let frase = prompt('Digite uma frase: ');
    let contagemVogais = frase.match(/[aeiou]/gi);
    let totalVogais = contagemVogais ? contagemVogais.length : 0;

    console.log(`Total de vogais na frase: ${totalVogais}`);

    continuarContagem = prompt('Deseja contar as vogais de outra frase? (s/n): ');
} while (continuarContagem === 's');

// Exercício 18: Cálculo de IMC
let continuarIMC;

do {
    let peso = parseFloat(prompt('Digite seu peso (em kg): '));
    let altura = parseFloat(prompt('Digite sua altura (em metros): '));
    
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    continuarIMC = prompt('Deseja calcular o IMC de outra pessoa? (s/n): ');
} while (continuarIMC === 's');

// Exercício 19: Jogo de Pedra, Papel e Tesoura
let continuarJogo;

do {
    let escolhaUsuario = prompt('Escolha: pedra, papel ou tesoura: ').toLowerCase();
    let opcoes = ['pedra', 'papel', 'tesoura'];
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        console.log('Empate!');
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        console.log('Você ganhou!');
    } else {
        console.log('Você perdeu!');
    }

    continuarJogo = prompt('Deseja jogar novamente? (s/n): ');
} while (continuarJogo === 's');

// Exercício 20: Cálculo de Fibonacci
let continuarFibonacci;

do {
    let n = parseInt(prompt('Digite um número para calcular a sequência de Fibonacci: '));
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(`Sequência de Fibonacci até ${n}: ${fib.slice(0, n).join(', ')}`);

    continuarFibonacci = prompt('Deseja calcular outra sequência de Fibonacci? (s/n): ');
} while (continuarFibonacci === 's');


/////////////////////////////////////////////////////////////////////////////////////