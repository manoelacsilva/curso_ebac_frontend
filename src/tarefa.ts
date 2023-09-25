// Utilizando o TypeScript e a tipagem, escreva duas funções:

// Uma função de multiplicação, que deverá receber como argumentos dois números e retornar a multiplicação deles.
// E uma função de saudação, que deverá receber um nome e retornar a concatenação 'Olá, ' + nome.


// Função de multiplicação

// Opção 1:

class Multiplicacao {
    a: number;
    b: number;
    
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    };
    
    multiplicar(): number {
        return this.a * this.b;
    };
};

const numeros = new Multiplicacao(2, 3);
const resultado = numeros.multiplicar();

console.log(resultado);

// Opção 2:

function multiplicacao(a: number, b: number): number {
    return a * b;
};

console.log(multiplicacao(2, 4));

// Opção 3:

const multiplicacao3 = (a: number, b: number): number => a * b;

console.log(multiplicacao3(2, 5));


// Função de saudação

// Opção 1:

class Saudacao {
    nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    };
    
    dizOla(): string {
        return `Olá, ${this.nome}`;
    };
};

const pessoa = new Saudacao('Manoela');
const saudacao = pessoa.dizOla();

console.log(saudacao);

// Opção 2:

function saudacao2(nome: string): string {
    return 'Olá, ' + nome;
};

console.log(saudacao2('Aline'));

// Opção 3:

const saudacao3 = (nome: string): string => 'Olá, ' + nome;

console.log(saudacao3('Marcelo'));