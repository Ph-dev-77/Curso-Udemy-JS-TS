/*const pessoa1 = {
    nome : "Paulo Henrique",
    idade: 22,
    EstadoCivil: "Casado", 
    esposa: "Natalia"
};

console.log(pessoa1.nome); */

function criapessoa (nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };

}

const pessoa1 = criapessoa('Paulo', 'Henrique', 22);
console.log(
    pessoa1.nome,
    pessoa1.sobrenome, 'tem ',
    pessoa1.idade, 'anos'
)