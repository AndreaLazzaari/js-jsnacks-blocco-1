// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre):
// moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero

let primoNumero = parseInt(prompt('Inserisci un numero'));
let secondoNumero = parseInt(prompt('Inserisci un numero'));

console.log(Math.max(primoNumero, secondoNumero));

while (primoNumero < secondoNumero) {
    primoNumero * 2
    
}