// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = [
    gina,
    paola,
    carlo,
    rick,
    carola
]

const nomeUtente = prompt('Inserisci il tuo nome');

let presente = false;

for (let i = 0; i < invitati.length; i++){
    if (nomeUtente === presente){
        presente = true;
    } 
}

if (presente === true){
    prompt('Fai parte della lista, puoi entrare')
} else {
    prompt('Non puoi entrare')
}