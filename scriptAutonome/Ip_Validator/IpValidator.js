

// function IpValid(ipaddress) 
// {
// // Regex de verification de format d'adresse Ip (uniquement IpV4) j'avoue elle est pas de moi j'aime pas les regex (mais je pense ne pas être le seul)
//  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
//   {
//     // si la chaine remplie condition l'ip est valide
//     console.log(`Ip valide`);
//   }else{
//     console.log(`Ip non valide`);
//   }

// }

function IpValid(ipaddress) 
{
  ipaddress = ipaddress.split(".");
  if(ipaddress.length != 4){
    console.log("ip non valide");
  }else {
    for (i=0; i<ipaddress.length; i++){
      if (ipaddress[i] > 255){
        console.log("ip non valide");
        return false;
      }
    }
    console.log("ip valide");
  }
}

IpValid("127.0.0.1");
IpValid("10.255.255.255");
IpValid("10.26.36.19.29");
IpValid("290.183.238.212");
IpValid("245.223.238.212");
