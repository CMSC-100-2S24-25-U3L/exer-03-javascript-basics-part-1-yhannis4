

function checkNum(pass){

    if(pass.length >= 8){
        console.log("This is a valid password with length" + " " + pass.length);
        return true;
    } else{
        console.log("This is not a valid password.");
        return false;
    }
}

function checkContent(pass){
    var upperCount = 0;
    var lowerCount = 0;
    var digitCount = 0;

    for(var i = 0; i < pass.length; i++){
        if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90){
            upperCount++;
        }
        else if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122){
            lowerCount++;
        }
        else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){
            digitCount++;
        }
    }

    console.log("Upper count is: "+upperCount+"\nLower count is: "+lowerCount+"\nDigit count is: "+ digitCount);

    if(upperCount >= 1 && lowerCount >= 1 && digitCount >= 1){
        return true;
    }
    else {
        return false;
    }
}

function checkMatch(pass1, pass2){
    if(pass1 == pass2){
        return true;
    }else{
        return false;
    }
}

function checkPass (pass, pass2){
    
    if(checkNum(pass) === true && checkContent(pass) == true && checkMatch(pass,pass2)){
        console.log("These are valid passwords.");
        return true;
    }
    else if(checkNum(pass) === true && checkContent(pass) == false){
        console.log("Invalid password. Please check if you have at least 1 Uppercase character, 1 Lowercase character, and 1 digit.");
        return false;
    }else if(checkNum(pass) === false && checkContent(pass) == true){
        console.log("Requires a longer password length.");
        return false;    
    } else if(checkMatch(pass, pass2)){
        console.log("Passwords do not match.")
        return false;

    }
    
    else{
        console.log("Password is too short and/or lacks the required characters.");
        return false;
    }
}

function reverseString(string){
    var newStr = "";

    for(let i = string.length -1; i >= 0; i--){

        newStr += string[i];
    }    
    console.log(newStr);
    return newStr;
}

function storePassword(name, pass1, pass2){


    const newObject = {
        name:name,

    }

    if (checkPass(pass1,pass2)==true){
        newObject.newPassword = reverseString(pass1);
    }else{
        newObject.newPassword = pass1;
    }

    console.log(newObject);
    return newObject;
 

}




storePassword("John", "Pass1234","Pass1234");
