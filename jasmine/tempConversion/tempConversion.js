function toPrecision(num){
    return Math.round(num*10)/10;
}

const ftoc = function(farenheitTemp){
    return toPrecision(5 * (farenheitTemp - 32) / 9) ;
}

const ctof = function(celsiusTemp){
    return toPrecision(9 * celsiusTemp / 5 + 32) ;
}

module.exports = {ftoc, ctof};