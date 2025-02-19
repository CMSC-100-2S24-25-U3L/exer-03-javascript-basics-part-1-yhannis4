

var str = "password"

function reverseString(string){
    var newStr = "";

    for(let i = string.length -1; i >= 0; i--){

        newStr += string[i];
    }    
    console.log(newStr);
    return newStr;
}

var new1 = reverseString(str);
console.log(new1);


