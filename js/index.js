
$(document).ready(function() {
    document.documentElement.requestFullscreen({ navigationUI: 'hide' });
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
}

function convertInputText() {    
    var codes = document.getElementById("codes").value.toString().split(" ")
    var result = "";

   
    if (document.getElementById("codes").value.toString() == "") {
        document.getElementById("ResultTextBox").innerHTML = "..."
        return;
    }

    for (const rawCode of codes) {
        code = rawCode
        result = result + code + ": " + alarms_rlp[parseInt(code)] + "<br><br>"
    }

    document.getElementById("ResultTextBox").innerHTML = result
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

/*

function clearInputText() {
    // Clear the input field
    document.getElementById("codes").value = "";
    
    // Clear the result text box
    document.getElementById("ResultTextBox").innerHTML = "...";
}

*/