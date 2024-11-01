console.log("Desafio DIO")

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

console.log("Desafio 1 - Ranking")
let nome = "João";
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