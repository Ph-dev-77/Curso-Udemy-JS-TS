//Atribuição via desestruturação


/*
let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)
//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, terceiroNumero, ...rest] = numeros;
console.log(rest)

console.log(primeiroNumero, segundoNumero, terceiroNumero)
*/



// O operado " ... " tem como função pegar o resto de um ArrayList! 
// Ele se pode ser chamado de "rest" que pega o resto do ArrayList, e o spread tem como função espalhar ou destribuir alguma coisa.
function pegandoRest(){

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [primeiroNumero, segundoNumero, terceiroNumero, ...rest] = numeros;
    console.log(primeiroNumero, segundoNumero, terceiroNumero, rest);

}

pegandoRest()


function segundaForma(){
    const numeros = [[1, 2, 3,], [4, 5, 6],  [7, 8, 9] ];

    console.log(numeros[2][2])
}

segundaForma();


function terceiraForma(){
    const numeros =[ [1, 2, 3,], [4, 5, 6],  [7, 8, 9] ] ;
    const [,[,,,],[,,nove]] = numeros;
    console.log(nove)



}
terceiraForma();

function quartaForma(){
    const numeros = [[1, 2, 3,], [4, 5, 6],  [7, 8, 9] ];
    const [lista1, lista2, lista3] = numeros;
    console.log(lista3[0])
    console.log(lista1[1])


}

quartaForma()

const numeros = [[1, 2, 3,], [4, 5, 6],  [7, 8, 9] ];
//const [ um, , tres, , cinco, , sete, , ...rest] = numeros;
//console.log( um, tres, cinco,sete, rest);

console.log(numeros[2][2])


