// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

let numeroUtente = prompt('inserisci un numero di 7 cifre');

const array = numeroUtente.split('');

let somma = 0

for (let i = 0; i < array.length; i++){
    somma = somma + parseInt(array[i]);
}

console.log(somma);
