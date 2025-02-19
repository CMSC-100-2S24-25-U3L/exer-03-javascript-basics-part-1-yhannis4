let pass1 = "abCDefgh"
let pass2 = "abcde123"


function checkNum(pass){

    if(pass.length >= 8){
        console.log("This is a valid password with length" + " " + pass.length);
    } else{
        console.log("This is not a valid password.");
    }
}

function checkContent(pass){
    let upperCount = 0;
    let lowerCount = 0;
    let digitCount = 0;

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
}

checkNum(pass1);
checkContent(pass1);
checkContent(pass2);

