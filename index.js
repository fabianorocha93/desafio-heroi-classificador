console.log("Desafio DIO")

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