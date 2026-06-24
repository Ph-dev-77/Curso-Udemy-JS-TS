//Atribuição via desestruturação com Objetos
function pessoaUm(){
    const pessoa = {
    nome: 'luiza',
    sobrenome: 'Silva',
    idade: 22,
    endereco: {
        rua: 'Avenida Brasil',
       // numero: 555
    }

};

const { nome, sobrenome, endereco: {rua, numero: n = 668}} = pessoa


console.log(nome, sobrenome,`da`, rua, n );

}

pessoaUm();

function Segundaforma(){
     const pessoa = {
    nome: 'luiza',
    sobrenome: 'Silva',
    idade: 22,
    endereco: {
        rua: 'Avenida Brasil',
       // numero: 555
    }

};

const { nome, idade, ...rest} = pessoa;

console.log(nome, idade, rest)
//Usando o "Rest"
}
Segundaforma()
