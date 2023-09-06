// Crie uma classe de uma abstração;
// Crie pelo menos duas classes que sejam herdeiras dessa classe;
// Crie pelo menos tres instancias de objetos;

function Pet(raca, tutor, nomeDoPet, idade, peso, castrado, moradia, genero) {
    this.raca = raca;
    this.tutor = tutor;
    this.nome = nomeDoPet;
    this.idade = idade;
    this.peso = peso;
    this.castrado = castrado;
    this.moradia = moradia;
    this.genero = genero;
};

function Cachorro(late, raca, tutor, nomeDoPet, idade, peso, castrado, moradia, genero) {
    this.late = late;

    Pet.call(this, raca, tutor, nomeDoPet, idade, peso, castrado, moradia, genero);
};

function Gato(mia, raca, tutor, nomeDoPet, idade, peso, castrado, moradia, genero) {
    this.mia = mia;

    Pet.call(this, raca, tutor, nomeDoPet, idade, peso, castrado, moradia, genero);
};

const pet1 = new Cachorro("para estranhos", "shih-tzu", "Aline", "Tobby", 9 + " anos", 8 + " kg", "não", "casa", "masculino");
const pet2 = new Cachorro("para gatos", "Boiadeiro-australiano", "Marcelo", "Spike", 4 + " anos", 18 + " kg", "sim", "casa", "masculino");
const pet3 = new Gato("para pedir comida", "Angorá", "Manoela", "Cat", 8 + " anos", 5 + " kg", "sim", "apartamento", "feminino");
const pet4 = new Gato("para pedir carinho", "Yorkshire terrier", "Maristela", "Beca", 3 + " anos", 7 + " kg", "sim", "casa", "feminino");

console.log(pet1);
console.log(pet2);
console.log(pet3);
console.log(pet4);