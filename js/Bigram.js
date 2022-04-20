function bigram() {
    // récupération de la chaine saisie par l'utilisateur
    let Z = document.querySelector("#input_bigram").value;
    console.log(Z.split(" "));
    Z = Z.split(" ");
    // boucle sur le tableau -2 pour ne pas afficher undefine à fin
    for (let i = 0; i < Z.length-2; i++) {
        console.log(`${Z[i]} ${Z[i+1]} ${Z[i+2]}`);
        document.getElementById("resultBigram").innerHTML += `${Z[i]} ${Z[i+1]} ${Z[i+2]} `;
    }
    
}