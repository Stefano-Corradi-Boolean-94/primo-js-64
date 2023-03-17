// file js importato

/*

-> senza parentesi tonde è una prppietà
coloreMartello = martello.colore
martello.colore = 'rosso'

-> con le parentesi tonde è un metodo che può accettare uno o più paramentri all'iterno della tonda
martello.piantaChiodi(3)

*/

// aggiunge una riga col testo che viene passato
//document.writeln('Ciao JS')


//alert('Ciao js')

console.log(document.getElementById('titolo'),document.getElementById('titolo').innerHTML);

document.getElementById('titolo').innerHTML = "Ciao Js";

console.log('Questo è il nuovo testo:', document.getElementById('titolo').innerHTML);

// una volta assegnato un const non lo posso più cambiare
const nome = 'Ugo';
const cognome = 'de Ughi';
// ERRORE!
//nome = 'Giuseppe';

// concatenamento di stringa
const mioSaluto = "Ciao " + nome + " " + cognome;
document.getElementById('saluto').innerHTML = mioSaluto;

let mioAltroSaluto = "Buongiorno";

//mioAltroSaluto = mioAltroSaluto + ' ' + nome + ' ' + cognome;

mioAltroSaluto += ' ' + nome + ' ' + cognome;

document.getElementById('altroSaluto').innerHTML = mioAltroSaluto;

// salvo in una const il testo del nodo del dom
const titoloTag =  document.getElementById('titolo2');
console.log(titoloTag);

titoloTag.innerHTML += ' ' + nome + ' ' + cognome + '?'; 

// let è una variabile che posso modificare
let contatore = 0;
console.log('contatore',contatore);
// gli alert sono bloccanti
//alert(contatore)
contatore = 10;
console.log('contatore',contatore);
//alert(contatore)

// se richiamo una var prima della sua dichiarazione non restituisce un errore
console.log('vecchiaVariabile',vecchiaVariabile);
var vecchiaVariabile = 'ciao'; // da non usare!
console.log('vecchiaVariabile',vecchiaVariabile);

const sottotitoloTag = document.getElementById('sottotitolo');
sottotitoloTag.innerHTML = nome;
console.log('sottotitoloTag.innerHTML',sottotitoloTag.innerHTML);

// le variabili let le posso dichiarare anche senza assegnazione e assegnare il valore in seguito
let numero;
console.log('numero',numero);
numero = 50;


let numeroStringa = '50';
console.log(numero, numeroStringa);

// con typeof ottengo il tipo di dato
console.log('--numero-->', typeof numero);
console.log('--numeroStringa-->', typeof numeroStringa);

// salvo in una const il testo del nodo del dom
const testo = document.getElementById('testo').innerHTML;
console.log('testo',testo);
console.log(nome);


let a = 5;
// un numero fra apici è una stringa
// let b = '7';
let b = 7;
let c = '2';
let somma = a + b;
let molt = a * b;
let sottr = a - b;
let div = b / a;
let div2 = b / c;
let sottr2 = b - c;

console.log('somma',somma);
console.log('molt',molt);
console.log('sottr',sottr);
console.log('sottr2',sottr2);
console.log('div',div);
console.log('div2',div2);
console.log('c stringa',c);
console.log('c numero',parseInt(c));


// salvo in una const il nodo del dom
const altroTestoTag = document.getElementById('altroTesto');

// concatenamento strimga con template literal
const altroTestoString = `
  <p class="text-primary">
    Buongiorno ${nome} ${cognome}, <br>
    Come va?
  </p>
`;

altroTestoTag.innerHTML =  altroTestoString;

const nomeinserito = prompt('Come ti chiami?');

// parseInt trasfroma una stringa numerica in numero
const anni = parseInt(prompt('Quanti anni hai?'));

console.log('nomeinserito',nomeinserito);
console.log('anni',anni, typeof anni);