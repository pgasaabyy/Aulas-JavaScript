/////// Fácil


//1
let array1 = [20, 30, 40]
console.log (array1)


//2
let array2 = [1, 3, 5]
console.log (array2[1])


//3
let array3 = [100, 200, 400]
array3[2] = 300
console.log(array3)


//4
let array4 = ["cereja", "manga", "morango"]
console.log(array4.length)


//5
let array5 = [2, 4, 6, 8];
let soma = 0;
for (let i = 0; i < array5.length; i++) {
    soma += array5[i];
}
console.log(soma); 


//6
let array6 = ["cereja", "manga", "morango", "abacaxi"]
array6.pop("morango")
console.log(array6)

//7
let array7 = [2, 4, 6]
array7.unshift(0)
console.log (array7)


//8
let array8 = ["cereja"]
let array81 = ["morango"]
let array82 = array8.concat(array81)
console.log(array82)





/////// Médio


//1
let arraym1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arraym1.length; i++) {
    console.log(arraym1[i])
}


//2
let arraym2 = [{nome: 'tartaruga', autor: 'ana'}, {nome: 'leao', autor: 'pedro'}]
for (let i = 0; i < arraym2.length; i++) {
    console.log(arraym2[i].nome)
}


//3
let arraym3 = [2, 4, 6]
let result = arraym3.map(x => x * 2)
console.log(result)


//4
let arraym4 = [10, 20, 30, 40]
let maiorquedez = arraym4.filter(x => x > 10)
console.log (maiorquedez)


//5
let arraym5 = [1, 2, 5]
let numerosPares = arraym5.every(x => x % 2 === 0);
console.log(numerosPares)


//6
let arraym6 = [-3, 0, 3]
let numeroNegat = arraym6.find(x => x < 0)
console.log(numeroNegat)


//7
let arraym7 = [4, 8, 1, 9, 3, 5]
arraym7.sort((a, b) => a - b)
console.log(arraym7)


//8
let arraym8 = [1, 3, 4, 5]
arraym8.splice(1, 0, 2)
console.log (arraym8)



////// Difícil


//1
function interseccao(arrayd1, arrayd11) {
    return arrayd1.filter(elemento => arrayd11.includes(elemento));
}

let arrayd1 = [1, 2, 3, 4];
let arrayd11 = [3, 4, 5, 6];
console.log(interseccao(arrayd1, arrayd11));


//2
function mediaAritmetica(arrayd2) {
    const soma = arrayd2.reduce((acc, num) => acc + num, 0);
    return soma / arrayd2.length;
}

let arrayd21 = [10, 20, 30, 40];
console.log(mediaAritmetica(arrayd21));


//3
function inverterArray(arrayd3) {
    const arrayInvertido = [];
    for (let i = arrayd3.length - 1; i >= 0; i--) {
        arrayInvertido.push(arrayd3[i]);
    }
    return arrayInvertido;
}


let arrayd31 = [1, 2, 3, 4];
console.log(inverterArray(arrayd31)); 


//4
function removerDuplicados(arrayd4) {
    return [...new Set(arrayd4)];
}

const arrayd41 = [1, 2, 2, 3, 4, 4];
console.log(removerDuplicados(arrayd41)); 

/////////////////////////////////////////////////
