console.log("Desafio DIO")

console.log("Desafio 3 - Escrevendo as Classes de Um Jogo")

class attackHero {
    constructor(nome, idade, typeHero, typeAttack) {
        this.name = nome;
        this.age = idade;
        this.hero = typeHero;
        this.attack = typeAttack;
    }

    atacar() {
        console.log(`O ${this.hero} atacou usando ${this.attack}`);
    }
}

let nome = "Belmont";
let idade = 31;
const typeHero = ["Guerreiro", "Mago", "Monge", "Ninja"];
const typeAttack = ["espada", "magia", "artes marciais", "shuriken"];

console.log("Indique seu tipo de herói: 0 - Guerreiro, 1 - Mago, 2 - Monge, 3 - Ninja")
console.log(".")
let escolha1 = 0; //Varia de acordo com o personagem do usuário
let escolha2 = 2;

let i = escolha1
let j = escolha2

var tipoDeHeroi1 = new attackHero(nome, idade, typeHero[i], typeAttack[i]);
tipoDeHeroi1.atacar();

let tipoDeHeroi2 = new attackHero(nome, idade, typeHero[j], typeAttack[j]);
tipoDeHeroi2.atacar();

console.log("......")
console.log("Desafio 2 - Calculadora de Partidas")
let win = 100;
let lost = 2;
let saldoVitorias = win - lost

// Categorias de ranking e saldos mínimos necessários para cada uma
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
const saldoMinimo = [0, 11, 21, 51, 81, 91, 101, 100000]; // saldo mínimo de vitórias para cada categoria
let categoriaNivel = nivel[0];

calcularPartidas() //chamada da função
//Definição do escopo da função
function calcularPartidas (){
	for (let i = 0; i < saldoMinimo.length; i++) {
    	if (saldoVitorias >= saldoMinimo[i]) {
        categoriaNivel = nivel[i];
    	} else {
     	   break; // Para o loop assim que a categoria correta é encontrada
    	}
	}
    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${categoriaNivel}`);
}

console.log("......")
console.log("Desafio 1 - Ranking")
//let nome = "João";
let xp = 100000;

// Categorias de ranking e valores mínimos de XP necessários para cada uma
const rankings = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "ascendente", "Imortal", "Radiante"];
const xpMinimo = [0, 1001, 2001, 5001, 7001, 8001, 9001, 10001, 1000000]; // XP mínimo para cada categoria

let categoria = rankings[0];

for (let i = 0; i < xpMinimo.length; i++) {
    if (xp >= xpMinimo[i]) {
        categoria = rankings[i];
    } else {
        break; // Para o loop assim que a categoria correta é encontrada
    }
}
console.log(`O Herói de nome ${nome} está no nível de ${categoria}`);