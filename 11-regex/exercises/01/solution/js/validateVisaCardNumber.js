function validateVisaCardNumber(visaNumber){
    return visaNumber.match(/^4[0-9]{12}([0-9]{3})?$/) ? true:false;
}



export default validateVisaCardNumber;
