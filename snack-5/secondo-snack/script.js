// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = [
    'gina',
    'paola',
    'carlo',
    'rick',
    'carola'
];


const nomeUtente = prompt('Inserisci il tuo nome');

let presente = false;

for (let index = 0; index < invitati.length; index++) {
    const guest = invitati[index];
    
    if (guest === nomeUtente){
        presente = true;
    } 
}

console.log(presente)


  

