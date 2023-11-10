
// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const anniPrimaPersona = parseInt(prompt('Inserisci gli anni della Prima persona'));
const anniSecondaPersona = parseInt(prompt('Inserisci gli anni della Seconda persona'));

if (anniPrimaPersona > anniSecondaPersona) {
    console.log('Anni prima persona sono maggiori');
} else if (anniPrimaPersona < anniSecondaPersona) {
    console.log('Anni seconda persona sono maggiori');
} else {
    console.log('Le persone hanno la stessa età');
}
