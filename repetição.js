/////// Exercícios Repetição

/////// Fáceis

//1 (No curso de Desenvolvimento de Sistemas do Senai Morvan Figueiredo, os alunos têm várias provas e atividades avaliativas. Crie um programa que calcule a média de três notas e determine se o aluno passou (média ≥ 6) ou ficou de recuperação (média < 6). Exiba a mensagem correspondente.)

const nota1 = 5;
const nota2 = 7;
const nota3 = 9;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

if (mediaNotas > 6) {
    console.log('Você passou no curso DEV');
}

else {
    console.log('Você reprovou no curso DEV');
}

//2 (A escola Senai Morvan Figueiredo está implementando um sistema para facilitar o cadastro dos alunos. Crie um programa que pergunte a idade de uma pessoa e exiba uma mensagem indicando se ela pode ou não se inscrever no curso de Desenvolvimento de Sistemas. Para este curso, é necessário ter pelo menos 16 anos.)

const idadeusuario = 10;
const mensagemBoasVindas = 'Seja bem-vindo à nossa página de cadastro para o curso de Desenvolvimento de Sistemas!';
const questionidade1 = 'Para realizar o cadastro, é necessário saber sua idade.';
const questionidade2 = 'Quantos anos você tem?';

console.log(mensagemBoasVindas);
console.log(questionidade1);

if (idadeusuario >= 16) {
    console.log(questionidade2);
    console.log(idadeusuario);
    console.log('Você é maior de dezesseis anos, continue o cadastro.');
}

else if (idadeusuario < 16) {
    console.log(questionidade2);
    console.log(idadeusuario);
    console.log('Você não tem a idade necessária, sinto muito.');
}

else {
    console.log(questionidade2);
    console.log('Informe a sua idade, por favor.');
}

//3 (A biblioteca do Senai Morvan Figueiredo oferece descontos em materiais didáticos para alunos. Crie um programa que calcule o valor final a ser pago, aplicando um desconto de 10% se o valor do material for superior a R$ 50.)

const livro1 = 10;
const livro2 = 20;
const livro3 = 20;

const somaLivros = livro1 + livro2 + livro3;
const valorDesconto = somaLivros * 0.10;
const valorFinal = somaLivros - valorDesconto;

if (somaLivros >= 50) {
    console.log(`Sua compra deu ${somaLivros}, você recebeu um desconto de 10% e o valor final é ${valorFinal}. Débito ou crédito?`);
}

else {
    console.log(`Sua compra deu ${somaLivros}, débito ou crédito?`);
}


//4 (No Senai Morvan Figueiredo, para um aluno ser aprovado, ele deve ter pelo menos 75% de presença. Crie um programa que pergunte a porcentagem de presença de um aluno e exiba uma mensagem informando se ele está apto ou não a ser aprovado.)

const porcentagemAluno = 54;
const questionFrequencia = 'Quanto de porcentagem você tem?';

if (porcentagemAluno >= 75) {
    console.log(questionFrequencia);
    console.log(porcentagemAluno);
    console.log('Parabéns, sua porcentagem está boa. Você foi aprovado.');
}

else {
    console.log(questionFrequencia);
    console.log(porcentagemAluno);
    console.log('Você foi reprovado por falta de presença nas aulas.');
}


//5 (Os cursos do Senai Morvan Figueiredo são oferecidos em turnos diferentes. Crie um programa que pergunte ao aluno seu turno (M para Matutino, V para Vespertino, N para Noturno) e exiba uma mensagem personalizada de acordo com o turno informado.)

const usuario = { nome: 'Ana', perídodo: 'Noturno' };
const mensagemdePerídodo1 = 'Turno da manhã (Matutino)';
const mensagemdePerídodo2 = 'Turno da tarde (Vespertino)';
const mensagemdePerídodo3 = 'Turno da noite (Noturno)';
const mensagemdePerídodo4 = 'Nenhum período encontrado';

if (usuario.período === 'Matutino') {
    console.log(usuario, mensagemdePerídodo1);
}

else if (usuario.período === 'Vespertino') {
    console.log(usuario, mensagemdePerídodo2);
}

else if (usuario.perídodo === 'Noturno') {
    console.log(usuario, mensagemdePerídodo3);
}

else {
    console.log(mensagemdePerídodo);
}


/////// Médios

//6 (No curso de Desenvolvimento de Sistemas, a nota mínima para aprovação nas disciplinas é 6. Crie um programa que receba três notas de um aluno e determine se ele passou direto, ficou de recuperação ou reprovou (nota < 4 em uma das provas). Exiba a situação do aluno.)

const notasD1 = 1;
const notasD2 = 3;

const mediaNotasCalcular = (notasD1 + notasD2) / 2;

if (mediaNotasCalcular > 6) {
    console.log(`Sua nota é ${mediaNotasCalcular}, você passou no curso`);
}

else if (mediaNotasCalcular > 4) {
    console.log(`Sua nota é ${mediaNotasCalcular}, você ficou de recuperação`);
}

else {
    console.log(`Sua nota é ${mediaNotasCalcular}, você reprovou`);
}


//7 (O Senai Morvan Figueiredo possui um laboratório de informática que utiliza diversos equipamentos, como monitores e teclados. Crie um programa para gerenciar o estoque. Pergunte ao usuário a quantidade atual de cada item e, se for menor que 10, exiba uma mensagem de “Repor Estoque”, caso contrário, exiba “Estoque Suficiente.”)

const monitores = 11;
const teclados = 3;

if (monitores < 10) {
    console.log(`Repor estoque de monitores`);
}

else if (teclados < 10) {
    console.log(`Repor estoque de teclados`);
}

else {
    console.log('Estoque Suficiente');
}

//8 (A escola Senai Morvan Figueiredo deseja categorizar os alunos em três níveis de desempenho com base em suas médias finais: "Excelente" para média ≥ 8, "Bom" para média entre 6 e 7.9, e "Precisa Melhorar" para média < 6. Crie um programa que classifique um aluno de acordo com sua média.)

const alunoMedia = 10;

if (alunoMedia > 8) {
    console.log('Excelente');
}

else if (alunoMedia >= 6 && alunoMedia < 7.9) {
    console.log('Bom');
}

else if (alunoMedia < 6) {
    console.log('Ruim, melhore');
}

//9 (O Senai oferece cursos de extensão com desconto para alunos matriculados. Crie um programa que pergunte se o aluno está matriculado e o valor do curso. Aplique um desconto de 20% para alunos matriculados e exiba o valor final do curso.)

const matricula = 'não';
const valorCurso = 250;

const valorDescCurso = valorCurso * 0.20;
const valorFinalCurso = valorCurso - valorDescCurso;

if (matricula === 'sim') {
    console.log(`você esta matriculado, seu descondo é de ${valorFinalCurso}`);
}

else {
    console.log('não há descontos');
}


//10 (Durante as aulas de Desenvolvimento de Sistemas, os alunos devem entregar projetos que são avaliados em três critérios: funcionalidade, design e documentação. Crie um programa que receba as notas de cada critério e exiba uma avaliação final como "Excelente" (média ≥ 8), "Bom" (média entre 6 e 7.9) ou "Precisa Melhorar" (média < 6).)

const critérioF = 7;
const critérioD = 0;
const critérioDoc = 8;

const critériosMédia = (critérioF + critérioD + critérioDoc) / 3;

if (critériosMédia > 8) {
    console.log('Excelente');
}

else if (critériosMédia >= 6) {
    console.log('Bom');
}

else {
    console.log('Precisa Melhorar');
}

/////// Difíceis

//11 (No Senai Morvan Figueiredo, um aluno é aprovado se tiver média ≥ 6 e frequência ≥ 75%. Crie um programa que receba a média e a frequência de um aluno e exiba se ele passou, ficou de recuperação (se a média está entre 4 e 5.9) ou foi reprovado.)

const média = 9.5;
const frequencia = 80;

if (média > 6 && frequencia >= 75) {
    console.log('Aprovado');
}

else if (média >= 4 && média < 5.9 && frequencia >= 75) {
    console.log('Recuperação');
}


else if (média < 6 && frequencia < 75) {
    console.log('Reprovado');
}

else {
    console.log('Dados Inválidos');
}

//12 (Para segurança, a escola possui um sistema de controle de acesso ao laboratório. Somente alunos com cartão de acesso válido podem entrar. Crie um programa que pergunte se o aluno possui o cartão e, caso ele tenha, pergunte se o cartão está ativo. Exiba uma mensagem informando se o acesso é permitido ou negado.)

const temCartão = 'sim';
const cartãoAtivo = 'sim';

if (temCartão === 'sim' && cartãoAtivo === 'sim') {
    console.log(`Entrada Permitida`);
}

else if (temCartão === 'sim' && cartãoAtivo === 'não') {
    console.log('Necessário validar cartão');
}

else {
    console.log('Entrada Não Autorizada');
}


//13 (A escola oferece recursos como notebooks e projetores para serem usados em projetos dos alunos. Crie um programa que receba o número de recursos solicitados e verifique se há itens suficientes no estoque. O programa deve verificar se o pedido é atendido ou se é necessário fazer uma reserva para uma data futura.)

const recursos = 400;

if (recursos > 250) {
    console.log('Produto em estoque');
}

else {
    console.log('Necessário fazer reserva');
}

//14 (No curso de Desenvolvimento de Sistemas, algumas disciplinas são obrigatórias e outras são eletivas. Crie um programa que pergunte se o aluno deseja se matricular em uma disciplina obrigatória ou eletiva. Caso seja obrigatória, exiba uma mensagem de confirmação. Caso seja eletiva, pergunte se há vagas disponíveis e exiba uma mensagem de confirmação ou de espera.)

const matriculaO = 'não';
const matriculaE = 'sim';
const pergunta = 'Deseja confirmar matricula ou aguardar a chamada?';

if (matriculaO === 'sim') {
    console.log('Matricula Confirmada')
}

else if (matriculaE === 'sim') {
    console.log(pergunta);
}

else {
    console.log('Dados Inválidos');
}

//15 (Para simular o desempenho dos alunos, a escola desenvolveu um sistema onde são atribuídas notas aleatórias para verificar os níveis de aprendizado. Crie um programa que receba notas simuladas para três provas e exiba se o aluno passou (média ≥ 6), ficou de recuperação (média entre 4 e 5.9) ou foi reprovado (média < 4). Caso a média seja maior que 8, exiba uma mensagem de destaque.)

const notaS1 = 9;
const notaS2 = 10;
const notaS3 = 7;

const mediaNotasS = (notaS1 + notaS2 + notaS3) / 3;

if (mediaNotasS > 6) {
    console.log('Você passou, parabéns pelo desempenho!');
}

else if (mediaNotasS >= 4 && mediaNotasS < 6) {
    console.log('Você ficou de recuperação');
}

else {
    console.log('Você reprovou, melhore da próxima vez');
}


/////// Extra Difíceis

//16 (Como parte de uma simulação para o curso de Desenvolvimento de Sistemas, os alunos estão criando um sistema de controle de pontos na carteira de motorista para uma autoescola. Crie um programa que receba uma lista de infrações cometidas por um motorista e some os pontos. Se os pontos totais forem iguais ou superiores a 20, exiba uma mensagem de suspensão da carteira. Caso contrário, exiba quantos pontos ele ainda pode acumular antes do limite.)

const pontosCarteira = 15;

const limiteDeVelocidade = 5;
const estacionarEmLugarProibido = 7;
const passarFarolVermelho = 3;

const somaInfracoes = limiteDeVelocidade + estacionarEmLugarProibido + passarFarolVermelho;

if (somaInfracoes >= pontosCarteira) {
    console.log('Sua carteira foi suspensa!');
}

else {
    const pontosRestantes = pontosCarteira - somaInfracoes;
    console.log(`Você ainda pode acumular ${pontosRestantes} pontos antes do limite de suspensão.`);
}


//17 (O Senai Morvan Figueiredo está desenvolvendo uma parceria com uma instituição bancária para criar simuladores de empréstimos para os alunos praticarem cálculos financeiros. Crie um programa que receba o valor do empréstimo e o número de parcelas e calcule o valor final com base nas taxas de juros. Exiba o valor total ao final do empréstimo.)

const valorEmprestimo = 3000;
const nParcelas = 12;
const porcJuros = 2;

const taxaDec = porcJuros / 100;
const fDesconto = Math.pow(1 + taxaDec, nParcelas) - 1;
const valorParcela = (valorEmprestimo * taxaDec * Math.pow(1 + taxaDec, nParcelas)) / fDesconto;
const vFinal = valorParcela * nParcelas;

console.log(`O valor total a ser pago ao final do empréstimo é R$${vFinal.toFixed()}`);

//18 (Alguns alunos realizam atividades extracurriculares que melhoram seu desempenho final. Crie um programa que calcule a média de um aluno, considerando três provas, e adicione um bônus de 5% caso ele tenha completado atividades extras. Determine se ele passou (média ≥ 6), ficou de recuperação (entre 4 e 5.9), ou reprovou (média < 4).)

let prova1 = 6;
let prova2 = 7;
let prova3 = 8;
let atividadesExtras = true;

let media3 = (prova1 + prova2 + prova3) / 3;

if (atividadesExtras) {
    media3 *= 1.05;
}

if (media3 >= 6) {
    console.log("Você passou!");
} else if (media3 >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}

//19 (Em uma atividade prática de e-commerce, os alunos do Senai Morvan Figueiredo estão criando um sistema para classificar produtos. Crie um programa que receba a qualidade e o preço de um produto e o classifique como "Ótimo Custo-Benefício", "Bom", "Regular" ou "Ruim" com base em critérios específicos.)

const produto = { nome: 'saia', preço: 170, estado: 'bom' };

let classificacao = '';

if (produto.estado === 'ótimo' && produto.preço <= 150) {
    classificacao = 'ótimo';
}

else if (produto.estado === 'bom' && produto.preço <= 175) {
    classificacao = 'bom';
}

else if (produto.estado === 'regular' && produto.preço <= 200) {
    classificacao = 'regular';
}

else {
    classificacao = 'ruim';
}

console.log(`${produto.nome} tem um ${classificacao} custo-benefício`);

//20 (Durante uma atividade de simulação de consumo de energia, os alunos do Senai Morvan Figueiredo precisam criar um programa que calcule o valor da conta de energia de um cliente com base em faixas de consumo. Crie um programa que receba o consumo de energia e calcule o valor total com base nas tarifas de cada faixa.)

const consumoEnergia = 250;
let valorConta = 0;

if (consumoEnergia <= 100) {
    valorConta = consumoEnergia * 0.5;
}

else if (consumoEnergia <= 200) {
    valorConta = (100 * 0.5) + ((consumoEnergia - 100) * 0.7);
}

else {
    valorConta = (100 * 0.5) + (100 * 0.7) + ((consumoEnergia - 200) * 0.9);
}

console.log(`O valor total da conta de energia é R$${valorConta}`);


////////////////////////////////////////////////////////////////////////////////////////