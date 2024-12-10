/// Baixa Complexidade


//1
const nome = 'cherry' 
console.log (nome);


//2
let frase = 'Hello World'
let frase1 = 'Olá Mundo'

if (frase == frase1) {
    console.log ('essas frases são iguais')
}

else {
    console.log('essas frases não são iguais')
}


//3
let number1 = 8

if (number1 > 10) {
    console.log ('esse número é maior que 10')
}

else {
    console.log ('esse número não é maior que 10')
}


//4
let idadeAluno = 19

if (idadeAluno >= 18){
    console.log ('Parabéns!')
}

else {
console.log( 'Sinto Muito')
}


//5
let idadeVoto = 15

if (idadeVoto >= 16) {
    console.log('Você pode votar')
}

else (
    console.log ('você não pode votar, sinto muito criança')
)


//6
let numero = 69

if ( numero < 50 || numero > 100){
    console.log ('esse número não está entre 50 e 100')
}

else {
    (numero > 50 && numero < 100)
    console.log ('esse número está entre 50 e 100')
}


/// Média Complexidade


//1
const usuario = 'Ana';
let idade = 56;

if ( idade > 18) {
    console.log ( `${usuario} é maior de idade`)
}


//2
let nu1 = 1;
let nu2 = 0;

if ( nu1 > nu2){
    console.log (`${nu1} é maior que ${nu2}`);
}

else (
    console.log (`${nu2} é maior que ${nu1}`)
)


//3
let texto = 'cherry';

if (texto.length > 5) {
    console.log ( 'a frase tem mais que 5 caracteres');
}

else if(texto.length === 5){
    console.log ('a frase tem 5 caracteres');
}

else (
    console.log ('frase tem menos que 5 caracteres')
)


//4
let number = 1
let number0 = 6

if ( number % 2 === 0 && number0 % 2 === 1){
    console.log (`só ${number} é par`)
}

else if ( number % 2 === 0 && number0 % 2 === 0){
    console.log ( 'os dois numeros são pares')
}

else if ( number % 2 === 1 && number0 % 2 === 1){
    console.log ('os dois são números impares')
}

else (
    console.log (`só o ${number0} é par`)
)


//5
let java = 'Hello World';

if (java.toLowerCase().includes('javascript')) {
    console.log('essa frase tem javascript');
} 
else {
    console.log('essa frase não contém javascript');
}



//6
let salario = 2500

if ( salario < 2000){
    console.log ('o salário está abaixo de 2000')
    }

else if (salario === 2000){
    console.log ('o salário é 2000')
}

else (
    console.log ('o salário está acima de 2000')
)


/// Alta Complexidade


//1
let senha = 'bananaPJ90'

if (senha.length >= 8 && /\d/.test (senha)){
    console.log ('entrada permitida')
}
else(
    console.log ('entrada não permitida, verifique novamente')
)


//2
let nota1 = 3
let nota2 = 1
let nota3 = 2

if ((nota1 + nota2 + nota3) / 3 >= 7){
    console.log ('Aprovado') 
}

else(
    console.log ('Reprovado')
)

//3

const anoAtual = new Date().getFullYear();

const ehBissexto = (ano) => {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
};

console.log(ehBissexto(anoAtual));

//4

const a = 5, b = 8, c = 3;

const maiorNumero = (a, b, c) => Math.max(a, b, c);

console.log(maiorNumero(a, b, c));

//5

const usuarioCorreto = 'usuario123';
const senhaCorreta = 'senha123';

const simularLogin = (usuario, senha) => {
  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    return 'Login bem-sucedido!';
  }
  return 'Usuário ou senha incorretos.';
};

console.log(simularLogin('usuario123', 'senha123'));
console.log(simularLogin('usuario123', 'senhaErrada'));

//6

const verificaSoma = (a, b, c) => a + b === c;

console.log(verificaSoma(3, 5, 8));
console.log(verificaSoma(3, 5, 9));

//7

let tentativas = 0;
const senhaCorreta2 = 'senha123';

const autenticar = (senha) => {
  if (tentativas >= 3) {
    return 'Conta bloqueada após 3 tentativas!';
  }
  if (senha === senhaCorreta2) {
    return 'Login bem-sucedido!';
  } else {
    tentativas++;
    return `Senha incorreta. Tentativas restantes: ${3 - tentativas}`;
  }
};

console.log(autenticar('senhaErrada'));
console.log(autenticar('senhaErrada'));
console.log(autenticar('senhaErrada'));
console.log(autenticar('senha123'));

//8

const calcularPontuacao = (fezTrabalhoExtra, participacaoAulas, notas) => {
    return fezTrabalhoExtra && participacaoAulas > 80 && notas.every(nota => nota > 7) 
      ? 'Aprovado com excelente desempenho!' 
      : 'Reprovado ou com desempenho abaixo das expectativas.';
  };
  
  console.log(calcularPontuacao(true, 85, [8, 9, 7.5]));
  console.log(calcularPontuacao(false, 90, [8, 9, 7.5]));
  console.log(calcularPontuacao(true, 75, [8, 9, 6]));

/////////////////////////////////////////////////////////////////////////////////////