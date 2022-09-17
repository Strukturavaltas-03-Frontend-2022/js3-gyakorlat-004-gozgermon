function validateMACAddress(MACAddress){
    return MACAddress.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/) ? true:false;
}



export default validateMACAddress;
