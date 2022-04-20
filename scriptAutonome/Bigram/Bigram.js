// appel de la fonction
bigram("the lord of the rings the fellowship of the ring");

// creation de la fonction
function bigram(Z) {
    // decoupage de la chaine de caractère par " " pour recuperer un tableau
    Z = Z.split(" ");
    // boucle sur le tableau en excluant le dernier élément
    for (let i = 0; i < Z.length-2; i++) {
        console.log(`${Z[i]} ${Z[i+1]} ${Z[i+2]}`);
    } 
}