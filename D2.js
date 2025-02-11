/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1 = 6
let n2 = 23
if (n1 > n2) { console.log("n1 è più grande")}
else { console.log(" n2 è più grande")}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function checkNumber(num) { if (num !== 5) console.log("not equal")}
checkNumber(3)


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
function checkDivisibility(num) { if (num % 5 === 0) { console.log("divisibile per 5")}
}
checkDivisibility(10)


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 5, b = 3
if (a === 8 || b === 8 || a + b === 8 || a - b ===8 || b - a === 8) { console.log("Condizione verificata")} 


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 60
let shippingCost = totalShoppingCart > 50 ? 0 : 10
let totalToPay = totalShoppingCart + shippingCost
console.log("Totale da pagare: €" + totalToPay)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 60 /* 80 */
let discountedTotal = totalShoppingCart2 * 0.8
let totalToPay2 = discountedTotal > 50 ? discountedTotal : discountedTotal + 10
console.log("Totale da pagare: €" + totalToPay2.toFixed(2))
/* con 80 viene un totale di 64€ perchè c'è la spedizione gratuita */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let c = 15, d = 30, e = 10
if (c < d) [c, d] = [d, c]
if (c < e) [c, e] = [e, c]
if (d < e) [d, e] = [e, d]
console.log("Numeri ordinati:", c, d, e)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function isNumber(value) { if (typeof value === "number" && !isNaN(value))
{ console.log("E' un numero")} else { console.log("Non è un numero") }
}
isNumber(10)
isNumber("salve")
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function checkEvenOdd(number) { if (number % 2 === 0) { console.log("Il numero è pari")}
else { console.log("Il numero è dispari")}
}
checkEvenOdd(12)
checkEvenOdd(9)
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 5) { console.log("Meno di 5")}
 else if (val < 10) { console.log("Meno di 10")}
  else { console.log("Uguale a 10 o maggiore")}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numbers = []
for (let i = 1; i <= 10; i++) { numbers.push(i)}
console.log(numbers)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbers[9] = 100
console.log(numbers)
