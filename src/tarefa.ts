// Utilizando o TypeScript e a tipagem, escreva duas funções:

// Uma função de multiplicação, que deverá receber como argumentos dois números e retornar a multiplicação deles.
// E uma função de saudação, que deverá receber um nome e retornar a concatenação 'Olá, ' + nome.

function multiplicacao(a: number, b: number): number {
    return a * b;
};

console.log(multiplicacao(2, 3));

function saudacao(nome: string): string {
    return 'Olá, ' + nome;
};

console.log(saudacao('Manoela'));