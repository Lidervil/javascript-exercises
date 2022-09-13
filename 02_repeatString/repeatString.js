const repeatString = function(stringi, numb) {

    if (numb < 0){
        return 'ERROR'
    }
    let str = stringi;
    let num = numb;
    let result = "";
    for(let i = 0; i < num; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
