/// Nível Fácil


//1
const nome = 'cherrylady'
console.log (nome)


//2
let x = 1
let y = 2

let soma = (x + y)

console.log (soma)


//3
let idade1 = 19

if ( idade1 > 18){
    console.log ('Você é maior de 18')
}

else (
    console.log ('Você não é maior de 18')
)


//4
let a = 9
let b = 8
let c = 4

let media = (a + b + c) / 3

console.log (media)


//5
let preco = 120

let preconovo = preco += preco * 0.10 

console.log (`O preço é ${preconovo}`)


/// Nível Médio


//1
let ano = 2007

let idade = 2024 - 2007

console.log (`A idade é ${idade}`)


//2
let n = 5

if (n % 2 === 0){
    console.log (`${n} é true`)
}

else if (n % 2 === 1){
    console.log (`${n} é false`)
}


//3
let salario = 2000

if (salario > 2000){
    salario -+ salario * 0.10
}

else (salario += salario * 0.05)

console.log (`salario final: ${salario}`)


//4
let r = 9;
let pi = 3.14;
let perimetro = 2 * pi * r;
console.log(perimetro);


//5
let num1 = 1
let num2 = 10

if(num1 < num2){
    console.log(`${num2} é maior que ${num1}`)
}

else if (num2 < num1){
    console.log (`${num2} é menor que ${num1} `)
}

else (
    console.log ('os dois são iguais')
)


//6
let celsius = 15;
let farenheit = (c * 9/5) + 32; 
console.log(farenheit);


//7
let na = 4
let nb = 10

if( na > nb){
    console.log (`${na} é maior que ${nb}`)
}

else(
    console.log (`${nb} é maior que ${na}`)
)


/// Nível Difícil


//1 
let num = 10;

if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${num} é divisível por 3 e 5`);
} else {
    if (num % 3 === 0) {
        console.log(`${num} é divisível por 3`);
    }
    if (num % 5 === 0) {
        console.log(`${num} é divisível por 5`);
    }
    if (num % 3 !== 0 && num % 5 !== 0) {
        console.log(`${num} não é divisível por 3 nem por 5`);
    }
}


//2 (usei chat)
let nf = 5; 
let fatorial = 1; 
if (n < 0) {
    console.log("O fatorial não está definido para números negativos");
} 
else {
    for (let i = 1; i <= n; i++) {
        fatorial *= i; 
    }
    console.log(`O fatorial de ${n} é ${fatorial}`);
}

//3

let at = 5;
let bt = 6;
let ct = 7;

if (at + bt > ct && at + ct > bt && bt + ct > at) {
    console.log("Os números podem formar um triângulo válido");
} 
else {
    console.log("Os números não podem formar um triângulo válido");
}

//4
let number = 15;

if (number >= 10 && number <= 20) {
    console.log(`${number} está dentro do intervalo 10, 20`);
} 
else {
    console.log(`${number} não está dentro do intervalo 10, 20`);
}

//5 (usei chat)
let anobi = 2024;

if ((anobi % 4 === 0 && anobi % 100 !== 0) || (anobi % 400 === 0)) {
    console.log(`${ano} é um ano bissexto`);
} 
else {
    console.log(`${ano} não é um ano bissexto`);
}

//6 (usei chat)
let numb1 = 10;
let numb2 = 20;

let maior = (numb1 + numb2 + Math.abs(numb1 - numb2)) / 2;
console.log(`O maior número é ${maior}`);

//7
let numbre1 = 10;
let numbre2 = 5;

let diferenca = numbre1 - numbre2;
let quadDiferenca = diferenca * diferenca;

console.log(`O quadrado da diferença entre ${numbre1} e ${numbre2} é ${quadDiferenca}`);

//8
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log(`A média ponderada é ${mediaPonderada}`);


///////////////////////////////////////////////////////////////////////////////