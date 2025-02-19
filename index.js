

function checkNum(pass){ //function to check the digit length of the string. 

    if(pass.length >= 8){ //if length of pass is greater than 8, it's valid, otherwise, not valid.
        console.log("This is a valid password with length" + " " + pass.length);
        return true;
    } else{
        console.log("This is not a valid password.");
        return false;
    }
}

function checkContent(pass){ //check content of the password.
    var upperCount = 0;
    var lowerCount = 0;
    var digitCount = 0;

    for(var i = 0; i < pass.length; i++){ //for loop that checks the characters's ASCII code. the upper and lower limits are the ASCII equivalents for A-Z, 0-9, and a-z.
        if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90){
            upperCount++; //increments the count of each lower, upper and digit count if detected.
        }
        else if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122){
            lowerCount++;
        }
        else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){
            digitCount++;
        }
    }

    console.log("Upper count is: "+upperCount+"\nLower count is: "+lowerCount+"\nDigit count is: "+ digitCount);

    if(upperCount >= 1 && lowerCount >= 1 && digitCount >= 1){ //if all counts are greater than or equal to 1, return true, otherwise false.
        return true;
    }
    else {
        return false;
    }
}

function checkMatch(pass1, pass2){ //check if the two passwords match.
    if(pass1 == pass2){
        return true;
    }else{
        return false;
    }
}

function checkPass (pass, pass2){ //combines all the functions for checking and if they are all true, this function returns true.
    
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

function reverseString(string){ //reverses string by adding the password's character one by one, starting with the last character.
    var newStr = "";

    for(let i = string.length -1; i >= 0; i--){

        newStr += string[i];
    }    
    console.log(newStr);
    return newStr;
}

function storePassword(name, pass1, pass2){ //stores the password.


    const newObject = { //creates the object first, initializing the name with the value given.
        name:name,

    }

    if (checkPass(pass1,pass2)==true){ //checks the password if they match. if they do, the created object is given a newproperty with the reversed value of the password.
        newObject.newPassword = reverseString(pass1);
    }else{
        newObject.newPassword = pass1; //if not, gives the first given password as their new password.
    }

    console.log(newObject);
    return newObject; //return
 

}




storePassword("John", "Pass1234","Pass1234"); //sample run, given in the exercise.
