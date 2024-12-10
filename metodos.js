/////// Exercícios Métodos

//1 (Em um sistema de gerenciamento de cadastro, é comum padronizar nomes para garantir consistência. Receba um nome completo e exiba-o em maiúsculas e minúsculas, ajudando a identificar se a entrada do usuário está formatada corretamente.)

function nomepadrao(nome_completo) {
    let nome_maiusculas = nome_completo.toUpperCase();
    let nome_minusculas = nome_completo.toLowerCase();
    return [nome_maiusculas, nome_minusculas];
}

let nome_completo = "Maria Carolina";
let resultado = nomepadrao(nome_completo);
console.log(resultado);

//2 (Imagine que você está criando uma pesquisa de conteúdo em uma plataforma. Verifique se uma frase contém a letra "a" e, caso esteja, mostre a posição da primeira ocorrência, facilitando a busca de termos específicos.)

function verificarLetraA(frase) {
    let posicao_A = frase.indexOf('a');

    if (posicao_A !== -1) {
        console.log (`a letra A está na posição ${posicao_A}`);
    }

    else {
        console.log('a letra A não foi encontrada');
    }
}

let frase = "Cherry Lady";
verificarLetraA(frase);


//mais de uma letra 

function encontrarOcorrencias(texto, letra) {
    let posicoes = [];
    let indice = texto.indexOf(letra);

    while (indice !== -1) {
        posicoes.push(indice);
        indice = texto.indexOf(letra, indice + 1);
    }

    return posicoes;
}

const texto = "exemplo de texto";
const letra = "e";
const ocorrencias = encontrarOcorrencias(texto, letra);
console.log(` * A letra "${letra}" aparece nas posições:`, ocorrencias);


//3 (Ao exibir um resumo de uma notícia, você precisa cortar o texto de forma dinâmica. Receba um texto e um intervalo para o corte (índice inicial e final), e exiba somente o trecho selecionado, simulando a exibição de resumos.)

let noiticia = "Frase para retirar";

console.log(noiticia.slice(10)) 

//4 (Em um sistema de mensagens, duas mensagens podem ser unidas para melhorar a visualização. Receba duas frases e exiba o resultado da junção, simulando a concatenação de mensagens do mesmo usuário.)]

let frase1 = "A aula está";

let fraseUnida = frase1.concat(' muito chata');

console.log(fraseUnida);

//5 (Num sistema de edição de texto, um usuário quer substituir uma palavra específica. Receba uma frase e troque todas as ocorrências de uma palavra antiga por uma nova, ajudando a simular um recurso de "substituir palavra".)

let abc = "abc";

console.log(abc.replace('abc', 'zxc'))

//6 (Em uma plataforma de e-commerce, ao exibir palavras-chave dos produtos, use hífens para separá-las. Peça ao usuário uma frase, separe as palavras e junte-as novamente usando hífens.)

let produtos = 'camisa, calça, tênis, maquiagem, bolsa';
let e_comerce = produtos.split(", ");
let juntarHifen = e_comerce.join ("-")

console.log(juntarHifen);

//7 (Imagine que você está criando uma fila de espera para atendimento. Adicione cinco números (representando senhas) a um array e depois remova a última senha ao final do atendimento.)

let fila = [];
let add = fila.push(1, 2, 3 ,4 , 5);
let pp = fila.pop(5);
console.log(fila);

//8 (Num sistema de gerenciamento de clientes, adicione novos clientes ao início da lista e remova o primeiro cliente conforme ele for atendido. Simule essa operação para entender como adicionar e remover elementos no início do array.)

let cliente = [15, 20, 25, 30];
let sai = cliente.shift();
let entra = cliente.unshift(22);
console.log(cliente);

//9 (Um usuário deseja ver a ordem inversa dos dados inseridos em uma lista. Receba uma lista de números e exiba-os na ordem inversa, simulando uma reorganização dos dados.)

let numbers = '1, 3, 5, 7, 9, 11'
let listaNumbers = numbers.split(", ");
let listaInversa = listaNumbers.reverse();

console.log(listaInversa);

//10 (Em uma loja online, é necessário exibir o preço de cada produto com desconto. Receba uma lista de preços e crie uma nova lista onde cada preço é multiplicado por 0.9 (10% de desconto).)

//11 (Em um cadastro de alunos, selecione somente os que passaram com nota acima de 7. Receba uma lista de notas e exiba uma nova lista apenas com as notas acima de 7.)

const listaNotas = [
    {nome: 'Bagriel', nota: 10},
    {nome: 'rilomu', nota: 15},
    {nome: 'Pina', nota: 12},
    {nome: 'Carla', nota: 6}
    ];
    
    const alunoAprovado = listaNotas.filter(function(aluno){
        return aluno.nota > 7;
    });
    
    console.log(alunoAprovado);

//12 (Em um caixa registradora, é necessário calcular o total das compras. Receba uma lista de valores e use o método `reduce` para somar todos os valores, exibindo o total.)

const compras = [2, 4, 6, 8, 0]

const soma = compras.reduce((total, num) => total + num, 0)
console.log(soma);

//13 (Em um sistema de biblioteca, organize os títulos dos livros em ordem alfabética. Receba uma lista de títulos e exiba-os ordenados, facilitando a visualização e busca.)

let livro = ["Diario de um Banana", "Biblia", "O pequeno Principe"];

livro.sort();


console.log(livro);

//14 (Gere números aleatórios para sorteios ou senhas temporárias. Gere um número entre 0 e 100 e arredonde-o para facilitar sua visualização.)

let senha  = Math.random().toString(36).substr(2, 10);
console.log(senha);

let idade = Math.floor(25.5);
console.log(idade);

//15 (Em uma aplicação de banco de dados, use o método `Object.keys` para exibir os campos disponíveis e `Object.values` para exibir os dados em um objeto de cliente.)

const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
    }
    const keys = Object.keys(pessoa);
    const values = Object.values(pessoa);
    console.log(keys);  
    console.log(values);

//16 (Crie um objeto `carro` com informações de marca, modelo e ano. Usando `this`, exiba uma mensagem mostrando as informações do carro, simulando o uso de um método para exibir dados em um sistema.)

function pessoa2 (nome, idade, cidade){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    }
    const joao = new pessoa2 ('João', 25, 'São Paulo');
    console.log(joao);

//17 (Em um sistema de recursos humanos, crie uma função `Pessoa` para armazenar o nome e idade de funcionários. Use `this` para que cada novo funcionário possa acessar seu nome e idade.)

function pessoa3 (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const ana = new pessoa3 ('Ana', 40);
console.log (ana);


//18 (Em um cadastro de produtos, crie uma classe `Produto` que inclui nome e preço. O método `detalhes` deve exibir uma mensagem com os dados do produto usando `this`.)


function Produto (nome, preço) {
    this.nome = nome;
    this.preço = preço;
    
    this.detalhes = function() {
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preço}`);
    };
}

const produto1 = new Produto('Gloss Kiko Milano', 120);

produto1.detalhes();

//19 (Crie um objeto `relogio` com a hora atual e exiba-a após um atraso de 1 segundo, simulando um timer. Use `this` para referenciar a hora corretamente.)

let relogio = {
    hora: new Date(),
  
    atrasoHora: function() {
      setTimeout(() => {
        this.hora = new Date();  
        console.log(this.hora.toLocaleTimeString());  
      }, 1000);  
    }
  };
  
  console.log(relogio.hora.toLocaleTimeString());
  
  relogio.atrasoHora();
  
//20 (Em um sistema de login, crie um objeto `usuario` com `nome` e `email`. Use `bind` para associar a função `exibirUsuario` ao contexto do objeto `usuario` para exibir seus dados de maneira precisa.)

let usuario = {
    nome: 'Ana',
    email: 'ana.exemplo@gmail.com'
};

function exibirUsuario() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Email: ${this.email}`);
}

let exibirUsuarioComContexto = exibirUsuario.bind(usuario);
exibirUsuarioComContexto();

//21 (Ao receber dados numéricos com casas decimais de usuários, converta-os para inteiros usando `parseInt`, facilitando o cálculo de valores inteiros.)

let numbers2 = [7.5, 2.9];

function convert() {
    return numbers2.map(num => parseInt(num));
}

let convertNumber = convert(); 
console.log(convertNumber);


//22 (Em um formulário, alguns números foram recebidos como strings. Converta todos os elementos do array para inteiros, facilitando operações matemáticas.)

//23 (Ao receber dados de entrada de usuários, verifique se é um número válido usando `isNaN` antes de prosseguir com cálculos.)

//24 (Crie uma lista com valores mistos. Use `isNaN` para separar somente os números, ajudando a filtrar os dados para cálculos precisos.)

//25 (Conte o total de caracteres de um campo de texto (como comentários), verificando se o limite de caracteres foi atingido.)

//26 (Num sistema de tarefas, conte quantas atividades foram registradas usando `length`.)

//27 (Em um cadastro de clientes, encontre o primeiro cliente com saldo superior a R$1000, simulando a busca de clientes VIP.)

//28 (Crie uma lista de produtos e localize o primeiro com preço superior a R$100, ajudando a identificar itens de maior valor.)

//29 (Multiplique todos os preços de uma lista por 2 para simular um reajuste de preço.)

//30 (De uma lista de alunos, exiba somente os nomes, simplificando a visualização dos cadastros.)


