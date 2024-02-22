/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
function crazySum (n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    }  
    else {
        return n1 + n2;
    }  
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
function boundary (n1) {
    if (n1 === 400  || n1 > 20 && n1 <= 100) {
        return true;
    }
    else {
        return false;
    }
}
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString (parola) {
    let parolaInvertita = parola.split("").reverse().join("");
    console.log(parolaInvertita);
}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst (stringa) {
    if (typeof stringa === "string") {
        let arrayParole = stringa.split(" ");
        let arrayParoleInMaiuscolo = [];
        for (i = 0; i < arrayParole.length; i++) {
            let primaLettera = arrayParole[i].charAt(0);
            let primaLetteraMaiuscola = primaLettera.toUpperCase();
            let paroleSenzaLaPrimaLettera = arrayParole[i].slice(1);
            let paroleFinali = primaLetteraMaiuscola + paroleSenzaLaPrimaLettera;
            arrayParoleInMaiuscolo.push(paroleFinali);
        }
        console.log(arrayParoleInMaiuscolo.join(" "));
    } else {alert("Scrivi una stringa!")}
}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
function giveMeRandom (n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    console.log(randomNumbers);
}
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
function area (l1, l2) {
    return l1 * l2;
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
function crazyDiff (num) {
    let differenzaAssoluta = Math.abs(num - 19);
    if (differenzaAssoluta > 19) {
        return differenzaAssoluta * 3;
    }
    else {
        return differenzaAssoluta;
    }
}
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
function codify (stringa) {
    if (stringa.startsWith("code")) {
        return stringa;
    } else {
        return "code" + stringa;
    }
}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
function check3and7 (num) {
    if (!Number.isInteger(num) || num <= 0) {
        console.error("Parametro non valido, scrivi un numero intero maggiore di zero");
    } else if (num % 3 === 0 || num % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
function cutString (stringa) {
    if (stringa.length >= 2) {
        return stringa.slice(1, -1);
    } else {
        return "";
    }
}
*/
