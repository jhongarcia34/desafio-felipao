// Desafio Classificador de Nível de Herói

// Variáveis primárias
let nomeDoHeroi = "jhongarcia34"
let xp = 100000

// Mensagem de abertura:
console.log("Seja bem vindo!!! " + nomeDoHeroi)
console.log("")


switch(true){
    case xp <= 1000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Ferro")
    break

    case xp >= 1001 && xp <= 2000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Bronze")
    break

    case xp >= 2001 && xp <= 5000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Prata")
    break

    case xp >= 5001 && xp <= 7000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Ouro")
    break

    case xp >= 7001 && xp <= 8000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Platina")
    break

    case xp >= 8001 && xp <= 9000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Ascendente")
    break

    case xp >= 9001 && xp <= 10000:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Imortal")
    break

    default:
        console.log("O herói de nome " +nomeDoHeroi + " está no nível de Radiante")
    break
}
