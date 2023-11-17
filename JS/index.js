// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// chiedere all'utente i chilometri da percorrere e la sua età 
const lungezzaTragitto = parseInt(prompt("quanti chilometri vuoi percorrere"));
console.log(lungezzaTragitto);

const age= parseInt(prompt("quanti anni hai "));
console.log(age);
// calcolare prezzo 
let prezzo= lungezzaTragitto * 0.21;
let sconto;
// calcolare prezzo con sconto 
if (age < 18 ) {
    sconto = ((prezzo / 100) * 20);
    console.log(prezzo);
} else if(age > 65 ) {
    sconto = ((prezzo / 100) * 40);
    console.log(prezzo);
}else {
    sconto = 0 ;
}

prezzo = prezzo - sconto;
console.log(prezzo);
document.getElementById("prezzo").innerHTML=prezzo.toFixed(2);