const roles={
    visa: /^4[0-9]{12}([0-9]{3})?$/,
      ip: /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])(\.(?!$)|$))(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){3}$/,
     mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
}


function validate(expToTest,type)
{
    return expToTest.match(roles[type]) ? true :false
}




export default validate;
