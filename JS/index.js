// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// chiedere all'utente i chilometri da percorrere e la sua età 
const lungezzaTragitto = parseInt(prompt("quanti chiloetri vuoi percorrere"));
// console.log(lungezzaTragitto);

const age= parseInt(prompt("quanti anni hai "));
// console.log(age);

// calcolare prezzo biglietto
 let prezzo = lungezzaTragitto * 0.21;
// console.log(prezzo);

// applicare sconto under18 e over 65 
if (age < 18 ) {
   let scontoUnder18 = (prezzo / 100 ) * 20
   var prezzoUnder18 = prezzo -scontoUnder18;
//    console.log(prezzoUnder18);
   document.getElementById("prezzo").innerHTML=prezzoUnder18.toFixed(2);
} else if(age > 65 ) {
    let scontoOver65= ((prezzo / 100 ) * 40);
    let prezzoover65= prezzo - scontoOver65;
    // console.log(prezzoover65);
    document.getElementById("prezzo").innerHTML=prezzoover65.toFixed(2);
} else {
    document.getElementById("prezzo").innerHTML=prezzo.toFixed(2);
    // console.log(prezzo);
}
