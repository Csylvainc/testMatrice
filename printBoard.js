var prompt = require('prompt-sync')({
    sigint: true // you can kill the wait with ctrl-C
  });

var board = [
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"]
]
var gamer = "R";

function printBoard(board){
    console.log("0 1 2 3 4 5 6" );
    for (let l = 0; l < board.length; l++) {
        let element = board[l].join(' ');
        console.log(element);
        
    }
}

function putPiece(playerMove, gamer, ligneIndex){
    board[ligneIndex].splice(playerMove, 1, gamer);
}

function checkBoard(board){
    let contenuLigne = "";
    let contenuColonne = "";
    for (let l = 0; l < board.length; l++) {
        contenuLigne = board[l].toString();
        //console.log(contenuLigne);
        contenuLigneR = contenuLigne.indexOf("R,R,R,R");
        contenuLigneY = contenuLigne.indexOf("Y,Y,Y,Y");
        if(contenuLigneR !== -1){
            var win = prompt(`le joueur ${gamer} a gagné !`);
            return "R";
        }
        if(contenuLigneY !== -1){
            var win = prompt(`le joueur ${gamer} a gagné !`);
            return "Y";
        }
    }


}

function game(){
    
    let playerMove = 1;
    let ligneIndex = 5;
    while (true){
        printBoard(board);
        var input = prompt(`Indiqyez la colonne joueur ${gamer}:`);
        playerMove = parseInt(input);
        if(board[0][0] != "-" 
        && board[0][1] != "-"
        && board[0][2] != "-"
        && board[0][3] != "-"
        && board[0][4] != "-"
        && board[0][5] != "-"
        && board[0][6] != "-"){
            input = prompt(`Partie nulle`);
            break;
        }
        if(board[0][playerMove] != "-"){
            input = prompt(`cette colonne est pleine, rejouez ${gamer}:`);
            playerMove = parseInt(input);
        }
    
        if(board[ligneIndex][playerMove] == "-"){
            putPiece(playerMove, gamer, ligneIndex);
            let check = checkBoard(board);
            if(check == "R"){
                return false;
            } 
            if (gamer == "R") {
                gamer = "Y";
            }else{
                gamer = "R";
            }
            
        }else{
            while(board[ligneIndex][playerMove] != "-"){
                ligneIndex--;
            }
                putPiece(playerMove, gamer, ligneIndex);
                let check = checkBoard(board);
                if(check == "Y"){
                return false;
                } 
                if (gamer == "R") {
                    gamer = "Y";
                }else{
                    gamer = "R";
                }
                ligneIndex = 5;
        }
    }
}
module.exports = {game, printBoard, putPiece, checkBoard};
