/////// Exercícios Swich Case



//1 (Sistema de Cadastro de Cursos)

let usuario = { nome: 'Ana', curso: 'Logística' };

switch (usuario.curso) {
    case 'Desenvolvimento_de_Sistemas':
        console.log('O curso de Desenvolvimento de Sistemas forma profissionais para criar e manter programas de computador, trabalhando com diversas linguagens de programação e ferramentas. A duração é de 2 a 3 anos, com uma carga horária média de 1.600 a 2.400 horas.');
    break;
    case 'Logística':
        console.log('O curso de Logística prepara o aluno para gerenciar cadeias de suprimentos, transportes e estoques. A duração é de 2 a 3 anos, com uma carga horária entre 1.600 e 2.000 horas.');
    break;
    case 'Administração':
        console.log('O curso de Administração capacita o aluno a gerir empresas, com foco em finanças, marketing e recursos humanos. A duração é de 3 a 4 anos, com uma carga horária de 2.400 a 3.200 horas.');
    break;
    default:
        console.log('Curso Inválido');
}


//2 (Calculadora Básica)

let numero = {
    valor1: 5,
    valor2: 7,
    operacao: 'divisão'
  };

  let soma = numero.valor1 + numero.valor2;
  let subtração = numero.valor1 - numero.valor2;
  let multiplicação = numero.valor1 * numero.valor2;
  let divisão = numero.valor1 / numero.valor2

  switch (numero.operacao){
    case 'soma':
        console.log (soma);
    break;
    case 'subtração':
        console.log(subtração);
    break;
    case 'multiplicação':
        console.log(multiplicação);
    break;
    case 'divisão':
        console.log(divisão);
    break;
    default:
        console.log('Operação Inválida')
  }


  //3 (Classificação de Idade)

  const pessoaI = { nomeI: 'Maria', idade: 80 };

  let faixa = '';
  
  if (pessoaI.idade <= 12) {
    faixa = 'criança';
  } 
  
  else if (pessoaI.idade <= 19) {
    faixa = 'adolescente';
  } 
  
  else if (pessoaI.idade <= 60) {
    faixa = 'adulto';
  } 
  
  else {
    faixa = 'idoso';
  }
  

  switch(faixa) {
    case 'criança':
      console.log(`${pessoaI.nomeI} é da faixa infantil`);
      break;
    case 'adolescente':
      console.log(`${pessoaI.nomeI} é da faixa adolescente`);
      break;
    case 'adulto':
      console.log(`${pessoaI.nomeI} é da faixa adulto`);
      break;
    case 'idoso':
      console.log(`${pessoaI.nomeI} é da faixa idoso`);
      break;
    default:
      console.log('Faixa etária não definida');
  }
  

  //4 (Classificação de Notas)

  const notas = 8;

  let classificação = '';
  
  if (notas <= 3) {
    classificação = 'Insuficiente';
  } 
  
  else if (notas <= 5) {
    classificação = 'Regular';
  } 
  
  else if (notas <= 7) {
    classificação = 'Bom';
  } 
  
  else if (notas <= 10) {
    classificação = 'Exelente';
  }
  

  switch(classificação) {
    case 'Insuficiente':
      console.log(`classificação insuficiente, se esforce mais`);
      break;
    case 'Regular':
      console.log(`classificação regular, se dedique um pouco mais`);
      break;
    case 'Bom':
      console.log(`classificação bom, mas pode melhorar`);
      break;
    case 'Exelente':
      console.log(`classficação exelente, parabéns`);
      break;
    default:
      console.log(' Nota não definida');
  }


//5 (Simulador de dias da semana)

let numeroDia = 0;

let diaSemana = '';

switch(numeroDia) {
  case 1:
    diaSemana = 'Domingo';
    break;
  case 2:
    diaSemana = 'Segunda-feira';
    break;
  case 3:
    diaSemana = 'Terça-feira';
    break;
  case 4:
    diaSemana = 'Quarta-feira';
    break;
  case 5:
    diaSemana = 'Quinta-feira';
    break;
  case 6:
    diaSemana = 'Sexta-feira';
    break;
  case 7:
    diaSemana = 'Sábado';
    break;
  default:
    diaSemana = 'Número inválido! Por favor, digite um número entre 1 e 7.';
}

console.log(`O dia da semana é ${diaSemana}`);


//6 (Sistema de mensagens de eventos)

let eventos = {evento: 'Semana da Tecnologia'}

switch (eventos.evento) {
    case 'Festa Junina':
        console.log('Celebração típica brasileira em junho, com danças, comidas e brincadeiras que resgatam a cultura rural.');
    break;
    case 'Semana da Tecnologia':
        console.log('Evento focado em inovações tecnológicas, com palestras e atividades educativas sobre o setor.');
    break;
    case 'Feira de Profissões':
        console.log('Evento onde estudantes conhecem diferentes áreas profissionais, cursos e oportunidades de carreira.');
    break;
    default:
        console.log('Evento inválido');
}


//7 (Calculadora de Meses do ano)

let numeroMes = 7;

let mesesDoAno= '';

switch(numeroMes) {
  case 1:
    mesesDoAno = 'Janeiro';
    break;
  case 2:
    mesesDoAno = 'Fevereiro';
    break;
  case 3:
    mesesDoAno = 'Março';
    break;
  case 4:
    mesesDoAno = 'Abril';
    break;
  case 5:
    mesesDoAno = 'Maio';
    break;
  case 6:
    mesesDoAno = 'Junho';
    break;
  case 7:
    mesesDoAno = 'Julho';
    break;
  case 8:
    mesesDoAno = 'Agosto';
    break;
  case 9:
    mesesDoAno = 'Setembro';
    break;
  case 10:
    mesesDoAno = 'Outubro';
    break;
  case 11:
    mesesDoAno = 'Novembro';
    break;
  case 12:
    mesesDoAno = 'Dezembro';
    break;
  default:
    mesesDoAno = 'Mês inválido'
}

console.log(`O mês do ano é ${mesesDoAno}`);


//8 (Identificador de estações do ano)

let nEstação = 2;
let estaçãoDoAno = '';

switch(nEstação) {
  case 1:
    estaçãoDoAno = 'Verão';
    break;
  case 2:
    estaçãoDoAno = 'Outono';
    break;
  case 3:
    estaçãoDoAno = 'Inverno';
    break;
  case 4:
    estaçãoDoAno = 'Primavera';
    break;
  default:
    console.log('Forneça um número de 1 a 4 para uma estação válida');
    break;
}

console.log(estaçãoDoAno); 


//9 (Conversor de unidade de medida)

let valor = 30;
let unidade = 'm';

function converterParaMetros(unidade, valor) {
    let resultado;

    switch(unidade) {
        case 'cm':
            resultado = valor / 100;
            break;
        case 'm':
            resultado = valor;
            break;
        case 'km':
            resultado = valor * 1000;
            break;
        default:
            console.log('Unidade não reconhecida.');
            return;
    }

    console.log(`O valor de ${valor} ${unidade} é igual a ${resultado} metros.`);
}


converterParaMetros(unidade, valor);


//10 (Sistemas de notas por conceitos)

const nota = 10;

let classificaçãoABCDF = '';

if (notas <= 2) {
  classificação = 'F';
} 

else if (nota <= 4) {
  classificação = 'D';
} 

else if (nota <= 6) {
  classificação = 'C';
} 

else if (nota <= 8) {
  classificação = 'B';
}

else{
    classificação = 'A'
}


switch(classificação) {
  case 'F':
    console.log(`Nota F`);
    break;
  case 'D':
    console.log(`Nota D`);
    break;
  case 'C':
    console.log(`Nota C`);
    break;
  case 'B':
    console.log(`Nota B`);
    break;
  default:
    console.log('Nota A');
}


//11 (Conversor de Moedas)

let valorM = 30;
let unidadeM = 'EUR';

function converterMoeda(unidadeM, valorM) {
    let resultadoM;

    switch (unidadeM) {
        case 'USD':
            resultadoM = valorM / 5.2;
            break;
        case 'EUR':
            resultadoM = valorM / 5.8;
            break;
        case 'GBP':
            resultadoM = valorM / 7.0;
            break;
        default:
            console.log('Unidade não reconhecida.');
            return;
    }

    console.log(`O valor de R$ ${valorM} reais é igual a ${resultadoM.toFixed(2)} ${unidadeM}.`);
}

converterMoeda(unidadeM, valorM);


//12 (Identificador de tipos de curso)

let tipoCurso = 'Extensão';

switch (tipoCurso) {
    case 'Técnico':
        console.log('O curso Técnico oferece formação prática para atuar em áreas específicas, com duração de 1 a 2 anos. Focado no mercado de trabalho e com carga horária variada, entre 1.200 e 1.600 horas.');
        break;
    case 'Superior':
        console.log('O curso Superior visa proporcionar uma formação acadêmica aprofundada, com duração de 3 a 4 anos e uma carga horária entre 2.400 e 3.200 horas. Ao final, o aluno pode obter um diploma de graduação.');
        break;
    case 'Extensão':
        console.log('Os cursos de Extensão são voltados para o aprimoramento profissional, com duração mais curta, geralmente de alguns meses, e carga horária variada. São ideais para quem busca qualificação adicional.');
        break;
    default:
        console.log('Tipo de curso inválido. Por favor, informe um tipo válido (Técnico, Superior, Extensão).');
}


//13 (Sistema de Prioridades)

let prioridade = 2; 
let descricaoPrioridade = '';

switch(prioridade) {
  case 1:
    descricaoPrioridade = 'Alta - Urgente e precisa ser feita o mais rápido possível.';
    break;
  case 2:
    descricaoPrioridade = 'Média - Deve ser feita em breve, mas não é urgente.';
    break;
  case 3:
    descricaoPrioridade = 'Baixa - Pode ser feita quando houver tempo disponível.';
    break;
  default:
    console.log('Forneça um número de 1 a 3 para uma prioridade válida');
    break;
}

console.log(descricaoPrioridade);


//14 (Calculadora de IMC)

const peso = 75;  
const altura = 1.75;  

const imc = peso / (altura * altura);  

let classificacaoIMC = '';

if (imc < 18.5) {
  classificacaoIMC = 'Baixo peso';
} else if (imc >= 18.5 && imc < 24.9) {
  classificacaoIMC = 'Peso normal';
} else if (imc >= 25 && imc < 29.9) {
  classificacaoIMC = 'Sobrepeso';
} else {
  classificacaoIMC = 'Obesidade';
}

switch(classificacaoIMC) {
  case 'Baixo peso':
    console.log(`Classificação IMC: Baixo peso`);
    break;
  case 'Peso normal':
    console.log(`Classificação IMC: Peso normal`);
    break;
  case 'Sobrepeso':
    console.log(`Classificação IMC: Sobrepeso`);
    break;
  case 'Obesidade':
    console.log(`Classificação IMC: Obesidade`);
    break;
  default:
    console.log('Valor inválido');
}


//15 (Classificador de tipo de documento)

let tipoDocumento = 'CPF';

switch (tipoDocumento) {
    case 'RG':
        console.log('O RG (Registro Geral) é um documento de identidade emitido pelos estados brasileiros. Ele contém informações pessoais e é utilizado para identificação civil dentro do território nacional.');
        break;
    case 'CPF':
        console.log('O CPF (Cadastro de Pessoas Físicas) é um documento utilizado para identificação fiscal de cidadãos brasileiros. É obrigatório para realizar transações financeiras, abrir contas bancárias e declarar impostos.');
        break;
    case 'Passaporte':
        console.log('O Passaporte é um documento de viagem emitido pelo governo brasileiro para cidadãos que desejam viajar para o exterior. Ele contém informações pessoais e permite o acesso a outros países.');
        break;
    default:
        console.log('Tipo de documento inválido. Por favor, informe um tipo válido (RG, CPF, Passaporte).');
}


//16 (Transporte Público)

let tipoPassageiro = 'Estudante'; 

switch (tipoPassageiro) {
    case 'Estudante':
        console.log('Tarifa de estudante: 50% de desconto no valor da tarifa.');
        break;
    case 'Trabalhador':
        console.log('Tarifa de trabalhador: tarifa cheia, sem descontos.');
        break;
    case 'Idoso':
        console.log('Tarifa de idoso: isento de pagamento, conforme a legislação.');
        break;
    default:
        console.log('Tipo de passageiro inválido. Informe um tipo válido (Estudante, Trabalhador, Idoso).');
}


//17 (Tempo de execução)

let tempoExecucao = 3; 

switch (true) {
    case (tempoExecucao <= 2):
        console.log('Tempo de execução: Rápido');
        break;
    case (tempoExecucao > 2 && tempoExecucao <= 5):
        console.log('Tempo de execução: Moderado');
        break;
    case (tempoExecucao > 5 && tempoExecucao <= 10):
        console.log('Tempo de execução: Lento');
        break;
    default:
        console.log('Tempo de execução: Muito Lento');
}


//18 (Acessibilidade)

let tipoDeficiencia = 'Auditiva'; 

switch (tipoDeficiencia) {
    case 'Visual':
        console.log('Assistência disponível: Leitura de tela, Braille, Guias e sinalizações táteis.');
        break;
    case 'Auditiva':
        console.log('Assistência disponível: Libras, legendas em vídeos, alertas sonoros convertidos para texto.');
        break;
    case 'Motora':
        console.log('Assistência disponível: Rampas, cadeiras de rodas, equipamentos de mobilidade assistida.');
        break;
    default:
        console.log('Tipo de deficiência inválido. Por favor, informe um tipo válido (Visual, Auditiva, Motora).');
}


//19 (Conversor de notas para conceitos)

let notaC = 85; 

switch (true) {
    case (notaC >= 90 && notaC <= 100):
        console.log('Conceito: A');
        break;
    case (notaC >= 80 && notaC < 90):
        console.log('Conceito: B');
        break;
    case (notaC >= 70 && notaC < 80):
        console.log('Conceito: C');
        break;
    case (notaC >= 60 && notaC < 70):
        console.log('Conceito: D');
        break;
    default:
        console.log('Conceito: E');
}


//20 (Simulador de clima)

let clima = 'Chuva'; 

switch (clima) {
    case 'Sol':
        console.log('Previsão de clima: Use roupas leves, óculos de sol e protetor solar.');
        break;
    case 'Chuva':
        console.log('Previsão de clima: Leve um guarda-chuva ou capa de chuva.');
        break;
    case 'Nublado':
        console.log('Previsão de clima: Pode estar fresco, leve uma jaqueta.');
        break;
    default:
        console.log('Condição climática inválida. Informe um clima válido (Sol, Chuva, Nublado).');
}


///////////////////////////////////////////////////////