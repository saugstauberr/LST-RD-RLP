
$(document).ready(function() {
    document.documentElement.requestFullscreen({ navigationUI: 'hide' });
    updateNumpadKeys();
    updateInputText();
})

function numpad(key) {
    switch(key) { 
        case 10: // Back
            removeInputText();
            break;
        case 11: // Delete
            clearInputText();
            break;
        default: // Default
            addInputText(key);
            break;
    }
    splitInputText();
    updateInputText();
    updateNumpadKeys();
}

function updateInputText() {    
    var codes = document.getElementById("input-text").innerHTML.toString().split(" ")
    var result = "";

   
    if (document.getElementById("input-text").innerHTML.toString() == "") {
        document.getElementById("result").innerHTML = ""
        toggleNumKey("del", false);
        toggleNumKey("back", false);
        return;
    }

    toggleNumKey("del", true);
    toggleNumKey("back", true);

    var result;
    for (const rawCode of codes) {
        result += '<p class="result-row"><a class="result-code">' + rawCode + '</a> <a class="result-text">' + 
        alarms_rlp[parseInt(rawCode)] + '</a></p>'
    }

    document.getElementById("result").innerHTML = result;
}

function addInputText(char) {
    document.getElementById("input-text").innerHTML += char;
}

function removeInputText() {
    document.getElementById("input-text").innerHTML = document.getElementById("input-text").innerHTML.slice(0, -1);
}

function clearInputText() {
    document.getElementById("input-text").innerHTML = "";
}

function updateNumpadKeys() {
    // Looks into the input text, then looks which number is in alarms_rlp list, if its not there, disables button
    var inputText = document.getElementById("input-text").innerHTML.toString()
    var spaceRemovalIterations = Math.floor(inputText.length / 4);

    var currentNumber;
    for(var i = 0; i <= spaceRemovalIterations; i++) {
        inputText = inputText.substring(inputText.indexOf(" ") + 1)
    }

    if(inputText.length == 3) {
        currentNumber = "";
    } else {
        currentNumber = inputText;
    }

    console.log(currentNumber);

    var possibleNextInput = Object.keys(alarms_rlp);


    // Makes all next inputs 3 characters long
    // This is done by adding leading zeros to the numbers
    var targetLength = 3;
    for (var i = 0; i < possibleNextInput.length; i++) {
        possibleNextInput[i] = "0".repeat(targetLength - possibleNextInput[i].length) + possibleNextInput[i];

    }

    // Look up which next numbers are possible
    // This is done by filtering the possibleNextInput array to only include numbers that start with the current number
    possibleNextInput = possibleNextInput.filter(key => key.startsWith(currentNumber));

    for (var i = 0; i < possibleNextInput.length; i++) {
        possibleNextInput[i] = possibleNextInput[i].substring(currentNumber.length, currentNumber.length + 1);
    }

    // Delete all duplicates in possibleNextInput
    possibleNextInput = [...new Set(possibleNextInput)];

    // Disable all numpad keys
    for (var i = 0; i <= 9; i++) {
        toggleNumKey(i, false);
    }
    // Enable only the keys that are in possibleNextInput
    for (var i = 0; i < possibleNextInput.length; i++) {
        toggleNumKey(possibleNextInput[i], true);
    }

    console.log(possibleNextInput);
}

function splitInputText() {
    // Get the raw input text without any formatting
    var inputText = document.getElementById("input-text").innerHTML.replace(/\s+/g, "");

    // Split the input text into chunks of 3 characters
    var splitText = inputText.match(/.{1,3}/g);

    // Join the chunks with a separator (e.g., a space)
    var formattedText = splitText ? splitText.join(" ") : "";

    // Update the input field with the formatted text
    document.getElementById("input-text").innerHTML = formattedText;
}


function toggleNumKey(key, state) {
    if(state) {
        document.getElementById("numpad-" + key).classList.remove("numpad-button-disabled");
        document.getElementById("numpad-" + key).disabled = false;
    } else {
        document.getElementById("numpad-" + key).classList.add("numpad-button-disabled");
        document.getElementById("numpad-" + key).disabled = true;
    }
}
