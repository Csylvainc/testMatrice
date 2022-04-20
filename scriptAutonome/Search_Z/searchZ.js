// Appel de la fonction
searchZ("Ma phrase sans cette lettre");
searchZ("z ZZ z zz Z");
searchZ("12z31231z23");
searchZ("");

// Création de la fonction
function searchZ(Z) {
    // recovery of the input field of the character string to be tested
    // Convert string to lowercase
    Z = Z.toLowerCase();
    //console.log(Z.split("z").length-1);
    // splitting the string at each character z and counting the elements of the returned array
    Z = Z.split("z").length-1;
    if (Z == 0){
        console.log(`Il n'y a aucun "z" a l'horizon`);
    }else {
        console.log(`Il y a ${Z} "z" dans le texte`);
    }
    
}