
// Scrivo in console i primi 20 numeri, scrivendoli a due a due. 
const ulElement = document.querySelector('ul.lista');


for (let i = 0; i <= 20; i = i + 2) {

    console.log(i)
    ulElement.innerHTML += '<p> ' + i + '</p>';

}