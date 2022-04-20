// With comment in english
function searchZ(Z) {
    // recovery of the input field of the character string to be tested
    Z = document.querySelector("#inputZ").value;
    // Convert string to lowercase
    Z = Z.toLowerCase();
    console.log(Z.split("z").length-1);
    // splitting the string at each character z and counting the elements of the returned array
    Z = Z.split("z").length-1;
    if (Z == 0){
        document.querySelector("#resultZ").innerHTML = `Il n'y a aucun "z" à l'horizon`;
    }else {
        document.querySelector("#resultZ").innerHTML = `Il y a ${Z} "z" dans le texte`;
    }
    
}