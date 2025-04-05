function convertInputText() {    
    var codes = document.getElementById("codes").value.toString().split(" ")
    var result = "";

   

    for (const rawCode of codes) {
        code = rawCode
        result = result + code + ": " + alarms_rlp[parseInt(code)] + "<br><br>"
    }

    document.getElementById("ResultTextBox").innerHTML = result
}

function splitInputText() {
    // Get the raw input text without any formatting
    var inputText = document.getElementById("codes").value.replace(/\s+/g, "");

    // Split the input text into chunks of 3 characters
    var splitText = inputText.match(/.{1,3}/g);

    // Join the chunks with a separator (e.g., a space)
    var formattedText = splitText ? splitText.join(" ") : "";

    // Update the input field with the formatted text
    document.getElementById("codes").value = formattedText;
}

function clearInputText() {
    // Clear the input field
    document.getElementById("codes").value = "";
    
    // Clear the result text box
    document.getElementById("ResultTextBox").innerHTML = "...";
}