// Criar um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

const alunos = [
    { nome: 'Manoela', nota: 3 },
    { nome: 'Aline', nota: 1 },
    { nome: 'Marcelo', nota: 10 },
    { nome: 'Tobby', nota: 6 },
    { nome: 'Jake', nota: 4 },
    { nome: 'Spike', nota: 2 },
    { nome: 'Maristela', nota: 5 },
    { nome: 'Duda', nota: 9 },
    { nome: 'Beca', nota: 7 },
    { nome: 'Daniel', nota: 8 },

];

function filtraNotaMaiorIgual6(aluno) {
    return aluno.nota >= 6;
}

const alunosComNotaMaiorIgual6 = alunos.filter(filtraNotaMaiorIgual6);

console.log(alunosComNotaMaiorIgual6);
