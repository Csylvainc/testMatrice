
function ValidateIPaddress(ipaddress) 
{
ipaddress = document.querySelector("#input_ip").value;
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    document.querySelector("#resultIp").innerHTML = `Ip valide`;
  }else{
    document.querySelector("#resultIp").innerHTML = `Ip non valide`;
  }

}