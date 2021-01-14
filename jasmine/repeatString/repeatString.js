const repeatString = function( str, times){
    let repeatedStr = "";
    if(times < 0) return 'ERROR';
    for(let i = 0; i < times; ++i){
        repeatedStr += str;
    }
    return repeatedStr;
}
module.exports = repeatString;