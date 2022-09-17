function validateIPAddress(IPAddress){
   // return IPAddress.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/) ? true:false;
    return IPAddress.match(/^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])(\.(?!$)|$))(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){3}$/) ? true:false;
}


export default validateIPAddress;
