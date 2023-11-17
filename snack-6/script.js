// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const listaNumeriDispari = [];

let numeroUtente


for (let i = 0; i < 6; i++ ){
     numeroUtente = parseInt(prompt('inserisci un numero'));
     console.log(numeroUtente)

if (numeroUtente % 2 == 1){
       listaNumeriDispari.push(numeroUtente)
    } 
    
}

console.log(listaNumeriDispari)







