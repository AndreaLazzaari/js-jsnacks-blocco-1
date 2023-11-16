// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const primaParola = prompt('inserisci la prima parola')
const secondaParola = prompt('inserisci la seconda parola')
console.log(primaParola, secondaParola)

let lunghezzaPrimaParola = primaParola.length


let lunghezzaSecondaParola = secondaParola.length

if (lunghezzaPrimaParola < lunghezzaSecondaParola) {
    console.log(lunghezzaPrimaParola, lunghezzaSecondaParola)
} else if (lunghezzaSecondaParola < lunghezzaPrimaParola) {
    console.log(lunghezzaSecondaParola, lunghezzaPrimaParola)
}

