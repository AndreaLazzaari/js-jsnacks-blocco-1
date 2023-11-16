
// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

// creo un elemento che devo ripetere
const ulElement = document.querySelector('ul.lista');

for (let i = 0, i <= 6, i++) {
    
   ulElement.innerHTML += '<p> ' + i + '</p>';

}